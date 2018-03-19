//module.exports = function () {
    //$.gulp.task('serve', function () {
       // $.browserSync.init({
            //server: {
                //baseDir: "./"
            //}
        //});
        //browserSync.watch('dist', browserSync.reload)
    //});


//}
module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            server: './build'
            //open: true,
            //server: {
                //baseDir: "./build/"
            //}
        });
       //$.browserSync.watch('build', $.browserSync.reload)
    });
};