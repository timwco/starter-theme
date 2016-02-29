var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babel = require('babelify');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('build:css', function () {
  gulp.src('./scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'));
});

gulp.task('build:js', function() {
  return browserify('./source/index.js')
    .transform(babel, {presets: ["es2015"]})
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function() {
  watch('./scss/**/*.scss', function () { gulp.start('build:css'); });
  watch('./source/**/*.js', function () { gulp.start('build:js'); });
});

gulp.task('default', ['build:css', 'build:js']);
gulp.task('start', ['default', 'watch']);
