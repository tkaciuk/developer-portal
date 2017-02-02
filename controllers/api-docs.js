var express = require('express');
var router = express.Router();

/**
 * API docs page
 * [this page was built on top of https://github.com/swagger-api/swagger-ui]
 */
router.get('/', function(req, res, next) {
  res.render('api-docs');
});

module.exports = router;
