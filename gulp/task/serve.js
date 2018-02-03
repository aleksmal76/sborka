module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            server: {
                baseDir: "./dist"
            }
        });
        //browserSync.watch('dist', browserSync.reload)
    });


}