module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('dev/statick/sass/main.scss')
        //.pipe(sass({
                //includePaths: require('node-normalize-scss').includePaths
            //}))
            .pipe($.gp.sass({ outputStyle: 'expanded' }))
            
            .on ('error',$.gp.notify.onError({
                title:'stile'
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 version'],
            }))
            .pipe($.gulp.dest('build/statick/css'))
        .pipe($.gp.csso())
            
            .pipe($.browserSync.reload({
                stream: true
            }));
    });


}