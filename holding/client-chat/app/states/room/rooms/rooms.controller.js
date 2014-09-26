;(function(){
  'use strict';
  angular
    .module('baseApp')
    .controller('RoomsCtrl', RoomsCtrl);

  /* @inject */
  function RoomsCtrl(Resolved, $scope, Room, socket) {
    var vm = this;
    vm.rooms = Resolved;
    socket.syncUpdates('rooms', vm.rooms);

    vm.addRoom = addRoom;
    vm.destroy = destroy;

    ///////////////

    function addRoom(){
      if(vm.newRoom !== ''){
        vm.rooms.post({name: vm.newRoom});
        vm.newRoom = '';
        vm.showNew = false;
      }
    }
    function destroy(room){
      vm.rooms.one(room._id).remove();
      // room.remove();
    }

  }
}).call(this);