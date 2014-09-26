/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Tool = require('./tool.model');

exports.register = function(socket) {
  Tool.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Tool.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('tool:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('tool:remove', doc);
}