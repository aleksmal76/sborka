module.exports = function () {
    $.gulp.task('fonts',()=> {
        return $.gulp.src('./dev/statick/fonts/**/*.*')
        .pipe($.gulp.dest('./build/statick/fonts/'));
    });
};