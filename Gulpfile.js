// var sourcemaps = require('gulp-sourcemaps');/* gulpfile.js */
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');/* gulpfile.js */
var sass = require('gulp-sass');
// default task
gulp.task('styles', function () {
    gulp.src('src/scss/style.scss')
    	.pipe(sourcemaps.init())
     	.pipe(sass().on('error', sass.logError))
     	.pipe(sourcemaps.write())
    	.pipe(gulp.dest('public/css'))
});

gulp.task('copy_vendor', function () {
    gulp.src('vendor/slick/slick/**/*')
        .pipe(gulp.dest('public/vendor/slick'));
});
gulp.task('copy_img', function () {
    gulp.src('src/img')
        .pipe(gulp.dest('public/img'));
});
gulp.task('copy_img', function () {
    gulp.src('src/fonts/*')
        .pipe(gulp.dest('public/fonts'));
});
gulp.task('copy_js', function () {
    gulp.src('src/js/*')
        .pipe(gulp.dest('public/js'));
});
//Watch task
gulp.task('default', ['copy'],function() {
    // gulp.watch('src/**/*.scss',['styles']);
    gulp.run('copy_vendor');
    gulp.run('copy_img');
    gulp.run('copy_js');
});

gulp.task('default', ['styles'],function() {
    gulp.watch('src/**/*.scss',['styles']);
});