var gulp=require('gulp');
var watermark = require('gulp-watermark');
var imagemin = require('gulp-imagemin');
 gulp.task('default',function(){
gulp.src('src/*')
	.pipe(imagemin())
    	.pipe(watermark({
        image: 'test/watermark.png',
        gravity: 'Center' }))
    	.pipe(gulp.dest('dist'))
});
