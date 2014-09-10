/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var <%= classedName %> = require('./model');

// Get list of things
exports.index = function(req, res) {

  <%= classedName %>.find(function (err, <%= name %>s) {
    if(err) { return handleError(res, err); }
    return res.json(200, <%= name %>s);
  });
};

// Get a single thing
exports.show = function(req, res) {
  <%= classedName %>.findById(req.params.id, function (err, <%= name %>) {
    if(err) { return handleError(res, err); }
    if(!<%= name %>) { return res.send(404); }
    return res.json(<%= name %>);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  <%= classedName %>.create(req.body, function(err, <%= name %>) {
    if(err) { return handleError(res, err); }
    return res.json(201, <%= name %>);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  <%= classedName %>.findById(req.params.id, function (err, <%= name %>) {
    if (err) { return handleError(res, err); }
    if(!<%= name %>) { return res.send(404); }
    var updated = _.merge(<%= name %>, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, <%= name %>);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  <%= classedName %>.findById(req.params.id, function (err, <%= name %>) {
    if(err) { return handleError(res, err); }
    if(!<%= name %>) { return res.send(404); }
    <%= name %>.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}