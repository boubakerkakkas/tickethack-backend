var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Connection = require('./models/connection')
var indexRouter = require('./routes/index');
var cartRouter = require('./routes/carts');
var tripRouter = require('./routes/trips');
var bookingRouter = require('./routes/bookings');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/trips', tripRouter);
app.use('/carts', cartRouter);
app.use('/bookings', bookingRouter);

module.exports = app;
