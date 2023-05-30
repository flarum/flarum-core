<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\User\Event;

use Flarum\User\User;

class RegisteringFromProvider
{
    public function __construct(
        public User $user,
        public string $provider,
        public array $payload
    ) {
    }
}
