<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Rap2hpoutre\LaravelLogViewer\LogViewerController;
use Route;

class LogViewerRouteProvider extends ServiceProvider
{
    /**
     * Register the log viewer route, if the appropriate access credentials have been set in the app configuration.
     *
     * @return void
     */
    public function boot()
    {
        ['username' => $username, 'password' => $password] = config('laravel-route-restrictor.logs');

        if ($username === null || $password === null) {
            return;
        }

        Route::get('/logs', [LogViewerController::class, 'index'])
             ->middleware("routeRestrictor:$username,$password");
    }
}
