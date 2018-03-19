'use strict'
//var gulp = require('gulp'),
//var	sass = require('gulp-sass'); 
//var	pug = require('gulp-pug'); 
//var	browserSync =require('browser-sync').create();
//var	watch = require('gulp-watch');
//var	sass = require('gulp-sass');
//var	csso = require('gulp-csso');
//var	autoprefixer = require('gulp-autoprefixer');
//gp=require('gulp-load-plugins')();

global.$ = {
	patch: {
		task: require('./gulp/patch/tasks.js')
	},
	gulp : require('gulp'),
	del :require('del'),
	//pug : require('gulp-pug'),
	//sass : require('gulp-sass'),
	//csso : require('gulp-csso'),
	fs: require('fs'),////jsonfile
	browserSync : require('browser-sync').create(),
	gp : require('gulp-load-plugins')()
};

$.patch.task.forEach(function (taskPatch) {
	require(taskPatch)();
});
	

 $.gulp.task('dev', $.gulp.series(
	 'clean',
	$.gulp.parallel('pug','sass','js:copy','svg','img:dev','fonts')
));

 $.gulp.task('build', $.gulp.series(
'clean',
	 $.gulp.parallel('pug','sass','js:copy','svg','img:build','fonts')
 ));

$.gulp.task('default', $.gulp.series(//
	 'dev',
	 $.gulp.parallel(
		 'watch',
		 'serve'
	 )
 ));

//$.gulp.task('default', $.gulp.series(//
	//'dev',
//$.gulp.parallel('pug', 'sass', 'libsJS:dev','js:copy', 'img:dev', 'svg'),//scripts
	//$.gulp.parallel('watch','serve')
	
//));

//$.gulp.task('build', $.gulp.series(//
	//$.gulp.parallel('pug', 'sass', 'libsJS:build','js:copy', 'img:build', 'svg'),//scripts
	//$.gulp.parallel('watch', 'serve')

//));

