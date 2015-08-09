// Require the needed npm packages
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    eslint = require('gulp-eslint');

gulp.task('lint', function () {
  return gulp.src(['app/**/*.js'])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});
 
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
  gulp.watch(['./app/**/*.js'], ['js', 'lint']);
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
gulp.task('default', ['connect','watch', 'lint']);
