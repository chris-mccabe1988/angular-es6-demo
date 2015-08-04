// Require the needed npm packages
var gulp = require('gulp'),
    connect = require('gulp-connect');
 
/**
 * Create a gulp task called html, reload the matching html files
 */
gulp.task('html', function() {
  gulp.src('*.html').pipe(connect.reload());
});

/**
 * Create a gulp task called js, reload the matching js files
 */
gulp.task('js', function() {
  gulp.src('./app/**/*.js').pipe(connect.reload());
});

/**
 * Watch the html and js files for changes
 */
gulp.task('watch', function(){
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['./app/**/*.js'], ['js']);
});

/**
 * Create a basic connect server and serve the current directory
 */
gulp.task('connect', function() {
  connect.server({
    root: [__dirname],
    livereload: true
  });
});

/**
 * The default gulp task will create the connect server and watch the source
 * files for changes
 */
gulp.task('default', ['connect','watch']);
