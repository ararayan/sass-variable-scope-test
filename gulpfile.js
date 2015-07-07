'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.src('clients/style/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('clients/style/css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('clients/style/sass/*.scss', ['sass']);
});
