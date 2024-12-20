<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Extend;

use Flarum\Extension\Extension;
use Flarum\Http\RouteCollection;
use Flarum\Http\RouteHandlerFactory;
use Illuminate\Contracts\Container\Container;
use Psr\Http\Server\RequestHandlerInterface;

class Routes implements ExtenderInterface
{
    private array $routes = [];
    private array $removedRoutes = [];

    /**
     * @param string $appName: Name of the app (api, forum, admin).
     */
    public function __construct(
        private readonly string $appName
    ) {
    }

    /**
     * Add a GET route.
     *
     * @param string $path: The path of the route
     * @param string $name: The name of the route, must be unique.
     * @param callable|class-string<RequestHandlerInterface> $handler: ::class attribute of the controller class, or a closure.
     *
     * If the handler is a controller class, it should implement \Psr\Http\Server\RequestHandlerInterface,
     * or extend one of the Flarum Api controllers within \Flarum\Api\Controller.
     *
     * The handler should accept:
     * - \Psr\Http\Message\ServerRequestInterface $request
     *
     * The handler should return:
     * - \Psr\Http\Message\ResponseInterface $response
     *
     * @return self
     */
    public function get(string $path, string $name, callable|string $handler): self
    {
        return $this->route('GET', $path, $name, $handler);
    }

    /**
     * Add a POST route.
     *
     * @param string $path: The path of the route
     * @param string $name: The name of the route, must be unique.
     * @param callable|class-string<RequestHandlerInterface> $handler: ::class attribute of the controller class, or a closure.
     *
     * If the handler is a controller class, it should implement \Psr\Http\Server\RequestHandlerInterface,
     * or extend one of the Flarum Api controllers within \Flarum\Api\Controller.
     *
     * The handler should accept:
     * - \Psr\Http\Message\ServerRequestInterface $request
     *
     * The handler should return:
     * - \Psr\Http\Message\ResponseInterface $response
     *
     * @return self
     */
    public function post(string $path, string $name, callable|string $handler): self
    {
        return $this->route('POST', $path, $name, $handler);
    }

    /**
     * Add a PUT route.
     *
     * @param string $path: The path of the route
     * @param string $name: The name of the route, must be unique.
     * @param callable|class-string<RequestHandlerInterface> $handler: ::class attribute of the controller class, or a closure.
     *
     * If the handler is a controller class, it should implement \Psr\Http\Server\RequestHandlerInterface,
     * or extend one of the Flarum Api controllers within \Flarum\Api\Controller.
     *
     * The handler should accept:
     * - \Psr\Http\Message\ServerRequestInterface $request
     *
     * The handler should return:
     * - \Psr\Http\Message\ResponseInterface $response
     *
     * @return self
     */
    public function put(string $path, string $name, callable|string $handler): self
    {
        return $this->route('PUT', $path, $name, $handler);
    }

    /**
     * Add a PATCH route.
     *
     * @param string $path: The path of the route
     * @param string $name: The name of the route, must be unique.
     * @param callable|class-string<RequestHandlerInterface> $handler: ::class attribute of the controller class, or a closure.
     *
     * If the handler is a controller class, it should implement \Psr\Http\Server\RequestHandlerInterface,
     * or extend one of the Flarum Api controllers within \Flarum\Api\Controller.
     *
     * The handler should accept:
     * - \Psr\Http\Message\ServerRequestInterface $request
     *
     * The handler should return:
     * - \Psr\Http\Message\ResponseInterface $response
     *
     * @return self
     */
    public function patch(string $path, string $name, callable|string $handler): self
    {
        return $this->route('PATCH', $path, $name, $handler);
    }

    /**
     * Add a DELETE route.
     *
     * @param string $path: The path of the route
     * @param string $name: The name of the route, must be unique.
     * @param callable|class-string<RequestHandlerInterface> $handler: ::class attribute of the controller class, or a closure.
     *
     * If the handler is a controller class, it should implement \Psr\Http\Server\RequestHandlerInterface,
     * or extend one of the Flarum Api controllers within \Flarum\Api\Controller.
     *
     * The handler should accept:
     * - \Psr\Http\Message\ServerRequestInterface $request
     *
     * The handler should return:
     * - \Psr\Http\Message\ResponseInterface $response
     *
     * @return self
     */
    public function delete(string $path, string $name, callable|string $handler): self
    {
        return $this->route('DELETE', $path, $name, $handler);
    }

    private function route(string $httpMethod, string $path, string $name, callable|string $handler): self
    {
        $this->routes[] = [
            'method' => $httpMethod,
            'path' => $path,
            'name' => $name,
            'handler' => $handler
        ];

        return $this;
    }

    /**
     * Remove an existing route.
     * Necessary before overriding a route.
     *
     * @param string $name: The name of the route.
     * @return self
     */
    public function remove(string $name): self
    {
        $this->removedRoutes[] = $name;

        return $this;
    }

    public function extend(Container $container, ?Extension $extension = null): void
    {
        if (empty($this->routes) && empty($this->removedRoutes)) {
            return;
        }

        $container->resolving(
            "flarum.{$this->appName}.routes",
            function (RouteCollection $collection, Container $container) {
                /** @var RouteHandlerFactory $factory */
                $factory = $container->make(RouteHandlerFactory::class);

                foreach ($this->removedRoutes as $routeName) {
                    $collection->removeRoute($routeName);
                }

                foreach ($this->routes as $route) {
                    $collection->addRoute(
                        $route['method'],
                        $route['path'],
                        $route['name'],
                        $factory->toController($route['handler'])
                    );
                }
            }
        );
    }
}
