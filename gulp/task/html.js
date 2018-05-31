//module.exports = function () {
    
    //$.gulp.task(' html', () => {
       // return src('dev/*. html ')
            //, pipe($.gp.posthtml())
            //, pipe(dest(' build '))
   //})
    module.exports = function () {
        $.gulp.task('html', () => {///function
            return $.gulp.src('dev/statick/*.html')
               // .pipe($.gp.pug({
                   // locals: {
                        //nav: JSON.parse($.fs.readFileSync('data/navigation.json', 'utf8')),
                        //content: JSON.parse($.fs.readFileSync('data/content.json', 'utf8')),
                   // },
                   // pretty: true
                
                //.on('error', $.gp.notify.onError(function (error) {
                    //return {
                        //title: 'html',
                        //message: error.message
                   // };
               // }));
                        //.pipe($.gp.posthtml())
                .pipe($.gulp.dest('build/'))
                .on('end', $.browserSync.reload);
        
})
}