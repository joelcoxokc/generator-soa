'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var MessageSchema = new Schema({
  text: String,
  room: ObjectId,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', MessageSchema);