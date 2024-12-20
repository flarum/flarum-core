<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Install\Steps;

use Flarum\Database\DatabaseMigrationRepository;
use Flarum\Database\Migrator;
use Flarum\Install\Step;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Filesystem\Filesystem;

class RunMigrations implements Step
{
    public function __construct(
        private readonly ConnectionInterface $database,
        private readonly string $driver,
        private readonly string $path
    ) {
    }

    public function getMessage(): string
    {
        return 'Running migrations';
    }

    public function run(): void
    {
        $migrator = $this->getMigrator();

        if (! $migrator->repositoryExists() && ! $migrator->installFromSchema($this->path, $this->driver)) {
            $migrator->getRepository()->createRepository();
        }

        $migrator->run($this->path);
    }

    private function getMigrator(): Migrator
    {
        $repository = new DatabaseMigrationRepository(
            $this->database,
            'migrations'
        );
        $files = new Filesystem;

        return new Migrator($repository, $this->database, $files);
    }
}
