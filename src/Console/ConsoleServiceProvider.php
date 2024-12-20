<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Console;

use Carbon\Carbon;
use Flarum\Console\Cache\Factory;
use Flarum\Database\Console\MigrateCommand;
use Flarum\Database\Console\ResetCommand;
use Flarum\Extension\Console\BisectCommand;
use Flarum\Extension\Console\ToggleExtensionCommand;
use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Foundation\Console\AssetsPublishCommand;
use Flarum\Foundation\Console\CacheClearCommand;
use Flarum\Foundation\Console\InfoCommand;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Console\Events\CommandFinished;
use Illuminate\Console\Scheduling\CacheEventMutex;
use Illuminate\Console\Scheduling\CacheSchedulingMutex;
use Illuminate\Console\Scheduling\EventMutex;
use Illuminate\Console\Scheduling\Schedule as LaravelSchedule;
use Illuminate\Console\Scheduling\ScheduleListCommand;
use Illuminate\Console\Scheduling\ScheduleRunCommand;
use Illuminate\Console\Scheduling\SchedulingMutex;
use Illuminate\Contracts\Container\Container;
use Illuminate\Events\Dispatcher;

class ConsoleServiceProvider extends AbstractServiceProvider
{
    public function register(): void
    {
        // Used by Laravel to proxy artisan commands to its binary.
        // Flarum uses a similar binary, but it's called flarum.
        if (! defined('ARTISAN_BINARY')) {
            define('ARTISAN_BINARY', 'flarum');
        }

        // Flarum doesn't fully use Laravel's cache system, but rather
        // creates and binds a single cache store.
        // See \Flarum\Foundation\InstalledSite::registerCache
        // Since certain config options (e.g. withoutOverlapping, onOneServer)
        // need the cache, we must override the cache factory we give to the scheduling
        // mutexes so it returns our single custom cache.
        $this->container->bind(EventMutex::class, function ($container) {
            return new CacheEventMutex($container->make(Factory::class));
        });
        $this->container->bind(SchedulingMutex::class, function ($container) {
            return new CacheSchedulingMutex($container->make(Factory::class));
        });

        $this->container->singleton(LaravelSchedule::class, function (Container $container) {
            return $container->make(Schedule::class, ['timezone' => $container['config']['app.timezone']]);
        });

        $this->container->singleton('flarum.console.commands', function () {
            return [
                AssetsPublishCommand::class,
                CacheClearCommand::class,
                InfoCommand::class,
                MigrateCommand::class,
                ResetCommand::class,
                ScheduleListCommand::class,
                ScheduleRunCommand::class,
                ToggleExtensionCommand::class,
                BisectCommand::class,
                // Used internally to create DB dumps before major releases.
                // \Flarum\Database\Console\GenerateDumpCommand::class
            ];
        });

        $this->container->singleton('flarum.console.scheduled', function () {
            return [];
        });
    }

    public function boot(Container $container, Dispatcher $events, LaravelSchedule $schedule): void
    {
        foreach ($container->make('flarum.console.scheduled') as $scheduled) {
            $event = $schedule->command($scheduled['command'], $scheduled['args']);
            $scheduled['callback']($event);
        }

        $events->listen(CommandFinished::class, function (CommandFinished $event) use ($container) {
            $command = $event->command;
            $settings = $container->make(SettingsRepositoryInterface::class);

            if ($command === ScheduleRunCommand::getDefaultName()) {
                $settings->set('schedule.last_run', Carbon::now());
            }
        });
    }
}
