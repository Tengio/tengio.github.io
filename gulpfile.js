var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var shell = require('gulp-shell');
var inline = require('gulp-inline');
var fonts = require('gulp-google-fonts-base64-css');

// var imagemin = require('gulp-imagemin');
// var replace = require('gulp-replace');
// var ngConfig = require('gulp-ng-config');

gulp.task('clean', shell.task(['rm -rf public']))

gulp.task('prepare', ['clean'], shell.task(['hugo -s .']))

gulp.task('minify-html', ['prepare'], function() {
  return gulp.src(['public/index.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('fonts', ['minify-html'], function() {
    return gulp.src('./font.list')
      .pipe(fonts())
      .pipe(concat('fonts.css'))
      .pipe(minifyCss())
      .pipe(gulp.dest('./public/css'));
});

gulp.task('minify-res', ['fonts'], function() {
  return gulp.src('public/index.html')
    .pipe(inline({
      base: 'public/',
      js: uglify,
      css: minifyCss,
      disabledTypes: ['svg', 'img']
    }))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

// -----------------------------------
// Core tasks
// -----------------------------------
gulp.task('default', ['minify-res'], function() {
    console.log("Success!");
})

