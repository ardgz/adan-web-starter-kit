var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cleanCSS = require('gulp-clean-css');
var exec = require('child_process').exec;

var path = require('path');
// var webpack = require('webpack');

gulp.task('webpack', function(cb) {
  exec('npm run webpack', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  })
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: './public',
    notify: false,
    open: false
  })
});

gulp.task('sass:minify', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
});

gulp.task('production', ['sass:minify'])

gulp.task('default', ['sass', 'webpack', 'browser-sync'], function() {
  gulp.watch('./src/scss/**/*', ['sass']);
  gulp.watch('./src/js/**/*', ['webpack']);
})