const mix = require('laravel-mix');


mix.js('js/main.js', 'src/index.js')
    .js('js/timer.js', 'src').setPublicPath('dist');