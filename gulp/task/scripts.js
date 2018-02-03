module.exports = function () {


$.gulp.task('scripts', function () {
    return $.gulp.src(['src/statick/js/**/*.js '])
        .pipe($.gp.concat('scripts.min.js'))
        .pipe($.gp.uglify())
        .pipe($.gulp.dest('dist/js'));
});
}