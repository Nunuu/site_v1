var gulp = require('gulp');

// Live reload/style-injection
var browserSync = require('browser-sync').create();

// CSS
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// JavaScript
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Image compression
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "localhost",
    watchTask: true,
    notify: false,
  });
});

gulp.task('sass', function () {
  gulp.src(['./src/css/main.sass'])
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 10%', 'ie 8', 'ie 7'], { cascade: true }))
    // .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('imagecomp', function () {
  return gulp.src('./images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./images'));
});

gulp.task('coffee', function() {  
  gulp.src('./src/js/modules/*.coffee')
    .pipe(coffee({bare: true}).on('error', console.log))
    .pipe(gulp.dest('./src/js/_compiled/modules'));
	
	gulp.src('./src/js/pages/*.coffee')
    .pipe(coffee({bare: true}).on('error', console.log))
    .pipe(gulp.dest('./src/js/_compiled/pages'));

	gulp.src('./src/js/tools/*.coffee')
    .pipe(coffee({bare: true}).on('error', console.log))
    .pipe(gulp.dest('./src/js/_compiled/tools'));

  gulp.src('./src/js/*.coffee')
    .pipe(coffee({bare: true}).on('error', console.log))
    .pipe(gulp.dest('./src/js/_compiled/'));
});

gulp.task('scripts', function() {
  gulp.src([
    './src/js/vendor/greensock/TweenMax.js',
    './src/js/vendor/greensock/easing/EasePack.js',

    './src/js/vendor/*.js',
    
    // './src/js/_compiled/tools/*.js',
    './src/js/_compiled/modules/*.js',
    './src/js/_compiled/pages/*.js',

    './src/js/_compiled/main.js',
    './src/js/_compiled/app.js',
  ])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('./dist/js/'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('uglify', function() {
  return gulp.src('./dist/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


// These functions watch for changes in the following areas and refreshes/compiles
gulp.task('watch', function () {
  gulp.watch('./src/**/*.sass', ['sass']);
  gulp.watch('./src/**/*.scss', ['sass']);

  gulp.watch('./src/js/**/*.coffee', ['coffee']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
});

gulp.task('watch-css', function () {
  gulp.watch('./src/**/*.sass', ['sass']);
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('watch-js', function () {
  gulp.watch('./src/js/**/*.coffee', ['coffee']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
});


// Choose which tasks occur when "gulp" command is run
gulp.task('default', ['sass', 'coffee', 'scripts', 'watch']);
gulp.task('production', ['uglify', 'imagecomp']); //condenses JS & images
gulp.task('watchAll', ['browser-sync', 'watch']); // watch CSS & JS for changes, run Browserify
gulp.task('watchCSS', ['browser-sync', 'watch-css']); //watches for CSS changes, runs Browserify
gulp.task('watchJS', ['browser-sync', 'watch-js']); //watches for JS changes, runs Browserify