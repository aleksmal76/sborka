module.exports = function () {
    $.gulp.task('img:dev',  () => {
        return $.gulp.src("dev/statick/img/**/*.{png,jpg,gif}")
            //.pipe($.gp.tinypng('X9bHcFA90Rj8Cb5msJIdqE173jcUiPnG'))
            .pipe($.gulp.dest('build/statick/img/'));////compressed_images
});
    $.gulp.task('img:build', () => {
        return $.gulp.src("dev/statick/img/**/*.{png,jpg,gif}")
            .pipe($.gp.tinypng('X9bHcFA90Rj8Cb5msJIdqE173jcUiPnG'))
            .pipe($.gulp.dest('build/statick/img/'));////compressed_images
    });
};
  