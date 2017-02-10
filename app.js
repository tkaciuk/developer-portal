var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var home = require('./src/controllers/home');
var apiDocs = require('./src/controllers/api-docs');
var userGuide = require('./src/controllers/user-guide');
var caseStudies = require('./src/controllers/case-studies');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Project assets
app.use('/js', express.static(path.join(__dirname, 'src/assets/js')));
app.use('/css', express.static(path.join(__dirname, 'src/assets/css')));
app.use('/fonts', express.static(path.join(__dirname, 'src/assets/fonts')));
app.use('/files', express.static(path.join(__dirname, 'src/assets/files')));
app.use('/images', express.static(path.join(__dirname, 'src/assets/images')));

// Page routes
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
