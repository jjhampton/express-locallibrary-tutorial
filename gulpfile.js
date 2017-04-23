(function(require) {
    const gulp = require('gulp');
    const concat = require('gulp-concat');
    const html2js = require('gulp-ng-html2js');
    const public = 'public';

    gulp.task('app', app);
    gulp.task('scripts', scripts);
    gulp.task('templates', templates);

    gulp.task('watch', watch);
    gulp.task('build', ['scripts', 'app', 'templates']);
    gulp.task('default', ['build']);

    // Front-end Angular Javascript files

    function app() {
		gulp.src(['public/javascripts/**/*.js'])
			.pipe(concat('app.js'))
			.pipe(gulp.dest(public));
    }

    // External Javascript files

    function scripts() {
        const scripts = [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.min.js'
        ];

		gulp.src(scripts)
			.pipe(concat('scripts.js'))
			.pipe(gulp.dest(public));
    }

    // Angular Templates

    function templates() {
        gulp.src(['public/javascripts/**/*.html'])
            .pipe(html2js({
                moduleName: 'app',
                stripPrefix: 'components'
            }))
            .pipe(concat('template.js'))
            .pipe(gulp.dest(public));
    }

    // Watches 

    function watch() {
		gulp.watch(['./public/javascripts/**/*.js'], ['app']);
        gulp.watch(['./public/javascripts/**/*.html'], ['templates']);
	}

}(require))