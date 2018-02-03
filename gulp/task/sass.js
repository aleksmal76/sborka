module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/sass/**/*.scss')
            .pipe($.gp.sass({ outputStyle: 'compressed' }))
            .on ('error',$.gp.notify.onError({
                title:'stile'
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 version'],
            }))
            .pipe($.gulp.dest('dist/css'))
        .pipe($.gp.csso())
            
            .pipe($.browserSync.reload({
                stream: true
            }));
    });


}