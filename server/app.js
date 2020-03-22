var createError = require('http-errors');
// var express = require('express');
import express from 'express'

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./modules/users/router');
var eventsRouter = require('./modules/events/router');

var app = express();

var cors = require('cors');
require('./plugins/mongoose');
// use it before all route definitions
app.use(cors({origin: ['https://yazamut-lehava.surge.sh','http://localhost:8082','http://localhost:8081','http://localhost:8080','https://localhost:8080','http://10.43.16.40:8080']}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);

// catch 404 and forward to error handler9
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
