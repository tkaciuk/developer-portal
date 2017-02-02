var fs = require('fs');
var gulp = require('gulp');
var Crawler = require('crawler');

/**
 * Dynamic to static pages mapping
 * @type {Object}
 */
var compileMapping = {
  'http://localhost:3000/': 'index.html',
  'http://localhost:3000/api-docs': 'api-docs/index.html',
  'http://localhost:3000/user-guide': 'user-guide/index.html',
  'http://localhost:3000/case-studies': 'case-studies/index.html'
};

/**
 * Compile dynamic templates to HTML
 */
gulp.task('compile-pages', function () {
  var crawler = new Crawler({
    callback: function (error, res, done) {
      var url = res.options.uri;
      if (error) {
        console.log(url +' failed: '+ error);
      } else {
        fs.writeFile('web/' + compileMapping[url], res.body, function () {
          console.log(url +' successfully compiled');
        });
      }
      done();
    }
  });

  crawler.queue(Object.keys(compileMapping));
});
