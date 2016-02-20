/**
 * Converts mongoose based model into a RESTful API for CRUD operations.
 */

var restful = require('node-restful');

module.exports = function(app, route) {

  // Setup the controller for REST.
  var rest = restful.model(
    'entry',
    app.models.entry
  ).methods(['get', 'put', 'post', 'delete']);

  // Register the endpoint with the application.
  rest.register(app, route);

  // Returns this module as express middleware.
  return function(req, res, next) {
    next();
  };
};
