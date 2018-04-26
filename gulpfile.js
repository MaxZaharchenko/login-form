var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){ 
    return gulp.src('scss/style.scss') 
        .pipe(sass()) 
        .pipe(gulp.dest('css')) 
});