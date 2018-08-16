let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
	.setPublicPath('public')
	.js('./src/app.js', 'public/js')
	.sass('./src/styling/app.scss', 'public/css')
	.options({
		imgLoaderOptions : {enabled : false},
		processCssUrls   : false,
		postCss          : [tailwindcss('./tailwind.js')],
	});
