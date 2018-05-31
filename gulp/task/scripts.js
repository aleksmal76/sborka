module.exports = function () {
//$.gulp.task('scripts:dev', () => {//libsJS//
    //return $.gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/slick-carousel/slick/slick.min.js'])
    //.pipe($.gp.concat('libs.min.js'))
//.pipe($.gulp.dest('build/statick/js/'))
    //.pipe($.browserSync.reload({
    //stream: true
    //}));
//});

   //$.gulp.task('scripts:build', () => {//libsJS
      // return $.gulp.src([ 'node_modules/jquery/dist/jquery.min.js','node_modules/slick-carousel/slick/slick.min.js'])
            //.pipe($.gp.concat('libs.min.js'))
            //.pipe($.gp.uglify())
            //.pipe($.gulp.dest('build/statick/js/'))
            //.pipe($.browserSync.reload({
                //stream: true
            //}));
    //});

    //gulp.task('scripts', function () {//scipts
        //return $.gulp.src(['dev/statick/js/**/*.js '])
            //.pipe($.gp.concat('scripts.min.js'))
            //.pipe($.gp.uglify())
            //.pipe($.gulp.dest('build/js'))
            //.pipe($.browserSync.reload({
                //stream: true
            //}));
    //c;
    //$.gulp.task('scripts', function () {
        //$.gulp.src(['/dev/statick/js/**/*.js',  '!dev/statick/js/**/*min.js'])
            //.pipe($.gp.rename({ suffix: '.min.js' }))
            //.pipe($.gp.concat('min.js'))
            //.pipe($.gp.uglify())
            //.pipe($.gulp.dest('build/statick/js'));
    //});

$.gulp.task('scripts', function () {
    return $.gulp.src(['dev/statick/js/**/ *.js', 'node_modules/jquery/dist/jquery.min.js',])//'/dev/statick/js/**/*.js''dev/statick/js/main.js', 'dev/statick/js/slide.js',
    //dev/statick/js/**/*.js'
    .pipe($.gp.concat('script.min.js'))
        .pipe($.gp.uglify())
        .pipe($.gulp.dest('build/statick/js/'));
        
        
});

//$.gulp.task('js:copy', () => {
    //return $.gulp.src(['dev/statick/js/**/*.js',
//'! dev/statick/js/libs.min.js'])

        //.pipe($.gulp.dest('build/statick/js/'))
        //.pipe($.browserSync.reload({
            //stream:true
        //}));
//});

};