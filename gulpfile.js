const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function styles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./scss/css'))
    .pipe(browserSync.stream());
}


function watch(){

    browserSync.init({
        server : {
            baseDir:'./'
        }
    });

    gulp.watch('./scss/**/*.scss', styles); // if anything changes here it starts the 'style'.
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}


exports.style = styles;
exports.watch = watch;