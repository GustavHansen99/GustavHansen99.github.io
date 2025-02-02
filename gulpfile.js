var gulp = require('gulp');
var plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const wait = require('gulp-wait');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

gulp.task('scripts', function() {
    return gulp.src('./js/scripts.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(babel({
          presets: [['@babel/env', {modules:false}]]
        }))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.stream());
});

gulp.task('styles', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(wait(250))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

// Serve Task (Local development server)
gulp.task('serve', function() {
    // Initialize BrowserSync server
    browserSync.init({
        server: './',  // Serve the root directory
        notify: false  // Disable browser notifications
    });

    // Watch JS and Sass files
    gulp.watch('./js/scripts.js', gulp.series('scripts'));
    gulp.watch('./scss/styles.scss', gulp.series('styles'));

    // Reload the browser on HTML or JS changes
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
});

// Default task to run `serve` and watch files
gulp.task('default', gulp.series('styles', 'scripts', 'serve'));