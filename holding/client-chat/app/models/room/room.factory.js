;(function(){
'use strict';

  angular
    .module('baseApp')
    .factory('Room', Room);
    /* @inject */
    function Room(Restangular) {
      return Restangular.service('rooms');

      // // GET: /api/rooms
      // Room.getList()
      //   .then(function (rooms){
      //     var room = rooms[1];

      //     room.name = "Hello";

      //     // PUT: /api/rooms/:_id;
      //     room.save();

      //   })

      // // POST: /api/rooms
      // Room.post()

      // // GET: /api/rooms/:id
      // Room.one(id).get().then()

      // // POST: /api/rooms/:id
      // Room.one(id).post().then()

    }

}).call(this);
