'use strict';

var express = require('express');
var controller = require('./room.controller');
var message = require('../message/message.controller');
var router = express.Router();

router.get('/', controller.index);
router.get('/:id/messages', message.index);
router.post('/:id/messages', message.create);
router.get('/:id/messages/:message_id', message.show);
router.put('/:id/messages/:message_id', message.update);
router.delete('/:id/messages/:message_id', message.destroy);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;