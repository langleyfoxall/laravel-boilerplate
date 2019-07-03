<?php

// Laravel Route Restrictor configuration

return [

    // Set a global username and password to protect your entire application

    'global' => [
        'username' => env('ROUTE_RESTRICTOR_GLOBAL_USERNAME', null),
        'password' => env('ROUTE_RESTRICTOR_GLOBAL_PASSWORD', null)
    ],

    'logs' => [
        'username' => env('LOGS_USERNAME'),
        'password' => env('LOGS_PASSWORD')
    ],

];
