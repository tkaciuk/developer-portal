var express = require('express');
var router = express.Router();
var fs = require('fs');
var md = require('markdown-it')();
var cheerio = require('cheerio');

/**
 * User guide page (slate)
 */
router.get('/', function(req, res, next) {
  var readmeMd = fs.readFileSync('views/parts/readme.md', 'utf8'),
      readmeHtml = md.render(readmeMd),
      $ = cheerio.load(readmeHtml),
      menuItems = [];

  $('h1').each(function(i, elem) {
    menuItems[i] = $(elem).text();
  });

  res.render('user-guide', {
    menuItems: menuItems,
    markdown: readmeHtml
  });
});

module.exports = router;
