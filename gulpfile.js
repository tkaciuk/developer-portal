var fs = require('fs-extra');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var Crawler = require('crawler');

/**
 * Home page URL
 * @type {string}
 */
var devUrl = 'http://localhost:3000/';

/**
 * Pages to compile
 * @type {[*]}
 */
var pages = ['/', 'api-docs', 'user-guide', 'case-studies'];

/**
 * Assets to build
 * @type {[*]}
 */
var assets = ['js', 'css', 'files', 'fonts', 'images'];

/**
 * Compile dynamic templates to static
 */
gulp.task('compile-pages', function () {
  var mapping = {};

  pages.forEach(function (item) {
    if (item !== '/') {
      mapping[devUrl + item] = item
    } else {
      mapping[devUrl] = ''
    }
  });

  var crawler = new Crawler({
    callback: function (error, res, done) {
      var url = res.options.uri,
          path = 'dist/' + mapping[url];

      if (!error) {
        try {
          fs.mkdirSync(path);
        } catch(e) {
          if ( e.code != 'EEXIST' ) throw e;
        }

        fs.writeFile(path + '/index.html', res.body, function () {
          console.log(url +' successfully compiled');
        });
      }
      done();
    }
  });

  crawler.queue(Object.keys(mapping));
});

/**
 * Build assets
 * (right after compile-sass task finishes)
 */
gulp.task('build-assets', ['compile-sass'], function () {
  try {
    assets.forEach(function (item) {
      fs.copySync(__dirname + '/src/assets/' + item, __dirname + '/dist/' + item);
    });
  } catch (err) {
    console.error(err)
  }
});

/**
 * Compile all sass files
 */
gulp.task('compile-sass', function () {
  gulp.src('./src/assets/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./src/assets/css'));
});

/**
 * Sass watcher
 */
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/sass/*.scss', ['compile-sass']);
});
