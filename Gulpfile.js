var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var SOURCE = './src';
var BUILD = './build';

gulp.task('watch', function() {
    gulp.watch(SOURCE + '/**', ['build']);
});

gulp.task('build', function() {
    browserify({
        entries: 'src/scripts/shared/content/index.jsx',
        extensions: ['.js, .jsx'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(BUILD + '/assets/scripts/'));
});

gulp.task('default', ['build']);