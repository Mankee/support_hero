/**
 * Main entrypoint for node application.
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var gzippo = require('gzippo');
var morgan = require('morgan');
var _ = require('lodash');

// Create the application.
var app = express();
var http = require('http').Server(app);

// Add Middleware necessary for REST API's.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// Middleware for deploying to Heroku
app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

// CORS Support which allow for public RESTful APIs.
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
var mongoUri = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/support_hero';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {

  // Load application models
  app.models = require("" + __dirname + '/models/index');
  console.log("loaded app models" + JSON.stringify(app.models));

  // Load application routes and register them with the application.
  var routes = require('./routes');
    _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });

  http.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + http.address().port);
  });
});
