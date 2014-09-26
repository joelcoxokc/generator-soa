;(function(){
  'use strict';
  angular
    .module('baseApp')
    .config( Room );

  Room.$inject = ['$stateProvider'];
  function Room($stateProvider) {
    $stateProvider
      .state('room', {
        url: '/rooms',
        templateUrl: 'app/states/room/rooms/rooms.html',
        controller: 'RoomsCtrl as vm',
        resolve: {
          Resolved: ResolvedRooms
        }
      })
      .state('room.detail', {
        url: '/:id',
        templateUrl: 'app/states/room/detail/room.html',
        controller: 'RoomCtrl as detail',
        resolve: {
          ResolvedDetail: ResolvedDetail,
          ResolvedMessages: ResolvedMessages
        }
      });

      /////////////////

      function ResolvedRooms(Room){
        return Room.getList()
          .then( function (data){
            console.log('Resolved-Rooms', data);
            return data;
          })
          .catch(function (err){
            console.error("Rooms not resolved", err);
          });
      }
      function ResolvedDetail(Room, $stateParams){
        return Room.one($stateParams.id).get()
          .then( function (data){
            console.log('Room-detail', data);
            return data;
          })
          .catch(function (err){
            console.error("Room-detail not resolved", err);
          });
      }
      function ResolvedMessages(Room, $stateParams){
        return Room.one($stateParams.id).all('messages').getList()
          .then( function (data){
            console.log('Messages', data);
            return data;
          })
          .catch(function (err){
            console.error("Messages not resolved", err);
          });
      }
  }
}).call(this);