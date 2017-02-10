var express = require('express');
var router = express.Router();

/**
 * Homepage
 */
router.get('/', function(req, res, next) {
  res.render('home');
});

module.exports = router;
