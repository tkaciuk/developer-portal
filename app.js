var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var home = require('./controllers/home');
var apiDocs = require('./controllers/api-docs');
var userGuide = require('./controllers/user-guide');
var caseStudies = require('./controllers/case-studies');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Project's assets
app.use('/static', express.static(path.join(__dirname, 'web/static')));
// Third part libraries
app.use('/libs', express.static(path.join(__dirname, 'web/libs')));
// Swagger related assets
app.use('/swagger', express.static(path.join(__dirname, 'web/swagger')));

app.use('/', home);
app.use('/api-docs', apiDocs);
app.use('/user-guide', userGuide);
app.use('/case-studies', caseStudies);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
