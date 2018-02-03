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

global.$={
	gulp : require('gulp'),
	gp : require('gulp-load-plugins')(),
	pug : require('gulp-pug'),
	sass : require('gulp-sass'),
	csso : require('gulp-csso'),
	browserSync : require('browser-sync').create(),
	

	patch:{
		task:require('./gulp/config/tasks.js')
	}
};
$.patch.task.forEach(function (taskPatch) {
	require(taskPatch)();
});
	






$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug','sass','scripts'),
	$.gulp.parallel('watch','serve')
	
));

