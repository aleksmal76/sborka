module.exports = function () {
$.gulp.task('libsJS:dev', () => {
    return $.gulp.src(['node_modules/svg4everybody/build/svg4everybody.min.js'])
    .pipe($.gp.concat('libs.min.js'))
    .pipe($.gulp.dest('build/statick/js/'))
    .pipe($.browserSync.reload({
        stream: true
    }));
});

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/build/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglify())
            .pipe($.gulp.dest('build/statick/js/'));
            
    });

//$.gulp.task('scripts', function () {
    //return $.gulp.src(['./dev/statick/js/**/*.js '])
        //.pipe($.gp.concat('scripts.min.js'))
        //.pipe($.gp.uglify())
        //.pipe($.gulp.dest('./build/statick/js/'))
        //.pipe($.browserSync.reload({
           // stream: true
   //}));     
//});

$.gulp.task('js:copy', () => {
    return $.gulp.src(['dev/statick/js/*.js',
'!./dev/statick/js/libs.min.js'])

        .pipe($.gulp.dest('./build/statick/js/'))
        .pipe($.browserSync.reload({
            stream:true
        }));
});

};