var express = require('express');
var router = express.Router();

/**
 * Case studies page
 */
router.get('/', function(req, res, next) {
  res.render('case-studies', {route: 'case-studies'});

});

module.exports = router;
