module.exports = function () {

    $.gulp.task("watch",function () {
        $.gulp.watch('dev/statick/**/*.html', $.gulp.series('html'));
        $.gulp.watch('dev/statick/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('dev/statick/js/**/*.js', $.gulp.series('scripts'));
        $.gulp.watch('dev/statick/img/*', $.gulp.series('img:dev'));
        $.gulp.watch('dev/statick/img/sprite/*.scss', $.gulp.series('sprite'));
        $.gulp.watch('dev/statick/img/svg/*.svg', $.gulp.series('svg'));
    });

};