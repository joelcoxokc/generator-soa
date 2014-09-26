'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;


var RoomSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  user: ObjectId,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', RoomSchema);