# Laravel Boilerplate

This is our internal boilerplate for Laravel projects, it should hopefully reduce the time it takes for you to setup a project & also improve code standards across the board.

The table below illustrates the planned features and the currently implemented features.

| Feature        | Implemented  | Desc | Link |
| ------------- |:-------------:|:----|:------:|
| Log Viewer    | ✅            | Easily viewing logs| https://github.com/rap2hpoutre/laravel-log-viewer|
| React         | ✅            | Frontend framework |https://github.com/facebook/react |
| ESLint        | ✅            | Coding standards |https://github.com/airbnb/javascript |
| Ziggy         | ✅            | Use named routes in your js|https://github.com/tightenco/ziggy |
| JWT Auth      | ✅            | JWT API authorization |https://github.com/tymondesigns/jwt-auth |
| Jest          | ❌            | JS testing framework |https://github.com/facebook/jest |
| Enzyme        | ❌            | Utilities for testing React |https://github.com/airbnb/enzyme |
| Travis        | ❌            | Continious integration |https://travis-ci.com/ |
| Dusk          | ❌            | Browser testing for Laravel (blade) |https://laravel.com/docs/5.6/dusk |

### Notes

- Be careful when using Jest & Dusk, they should not be used in tandem, use Jest & Enzyme for React rendered apps & Dusk for Blade rendered apps.
- When using Ziggy, ensure you add ```@routes``` before you include your application's bundle.
- JWTAuth is using the latest release candidate & not ```0.5.*```. Therefore make sure you use this link when referring to the docs. http://jwt-auth.readthedocs.io/en/develop/
- Travis needs some modifications based on your setup, use it simply as a guideline and customise to your needs.
