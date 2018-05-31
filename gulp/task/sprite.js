module.exports = function () {
//$.gulp.task('svg', () => {
    //return $.gulp.src('dev/statick/img/svg/*.svg')////минимизирует svg
    //.pipe($.gp.svgmin({
        //js2svg: {
            //pretty: true
        //}
    //}))
    //.pipe($.gp.cheerio({
        //run: function($) {
         // $('[fill]').removeAttr('fill');
         // $('[stroke]').removeAttr('stroke');//удаляет строки
         // $('[style]').removeAttr('style');  
        //},
        //parserOptions: { $xmlMode: true }
    //}))
//.pipe($.gp.replace('&gt;', '>'))
//.pipe($.gp.svgSprite({
    //mode: {
        //symbol: {
            //sprite:"sprite.svg"
        //}
    //}
//}))
//.pipe($.gulp.dest('build/statick/img/svg/'));
//});



//$.gulp.task('svg', function () {
    //return $.gulp.src('dev/statick/img/svg/*.svg')
        //.pipe($.gp.svgSprite())
        //.pipe($.gulp.dest('build/statick/img/svg/')) // Write the sprite-sheet + CSS + Preview 
       // .pipe(filter("**/*.svg"))  // Filter out everything except the SVG file 
        ///.pipe($.gp.svg2png())           // Create a PNG 
        //.pipe($.gulp.dest('build/statick/img/svg/'));
//});



//$.gulp.task('sprite', function () {
//return $.gulp.src( 'dev/statick/img/sprite/*.svg')
	 
	//.pipe($.gp.svgmin({
		//js2svg: {
			//pretty: true
		//}
    //}))
    //.pipe($.gp.cheerio({
        //run: function ($) {
           // $('[fill]').removeAttr('fill');
           // $('[stroke]').removeAttr('stroke');
            //$('[style]').removeAttr('style');
        //},
       // parserOptions: { xmlMode: true }
    //}))
    //.pipe($.gp.replace('&gt;', '>'))
    //.pipe($.gp.svgSprite({
        //mode: "symbols",
        //preview: false,
        //selector: "icon-%f",
        //svg: {
            //symbols: 'symbol_sprite.html'
        

    //mode:{
            //symbol:{
               // sprite:"sprite.svg",
                 //sprite:"symbol_sprite.html"

                 
           //}
        //}
		
		
        
	//}
//))
//.pipe($.gulp.dest('build/statick/img/sprite/'));

//});

$.gulp.task('sprite', function () {
    var spriteData =  $.gulp.src('dev/statick/img/sprite/*.png')
    .pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      padding:20
    }));
    return spriteData.pipe($.gulp.dest('dev/statick/img/sprites/'));
  });


};