module.exports = function () {

    $.gulp.task("watch",function () {
    $.gulp.watch('dev/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('dev/statick/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('dev/statick/js/**/*.js', $.gulp.series('libsJS:dev','js:copy'));
        $.gulp.watch('dev/statick/img/*', $.gulp.series('img:dev'));
        $.gulp.watch('dev/statick/img/svg/*.svg', $.gulp.series('svg'));
    });

};