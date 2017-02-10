var express = require('express');
var router = express.Router();

/**
 * User guide page (slate)
 * [this page was built on top of https://github.com/rstacruz/flatdoc]
 */
router.get('/', function(req, res, next) {
  res.render('user-guide', {route: 'user-guide'});
});

module.exports = router;
