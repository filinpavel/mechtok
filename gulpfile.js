var gulp=require('gulp');
var watermark = require('gulp-watermark');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
 gulp.task('default',function(){
gulp.src('images/price/*')
	.pipe(imagemin())
    	
	.pipe(imageResize({
	width : 800,
      	height : 600,
      	crop : true,
      	upscale : false
}))
	.pipe(watermark({
        image: 'images/watermark.png',
        gravity: 'Center' }))

    	.pipe(gulp.dest('images/dist'))
});
