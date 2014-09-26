;(function(){
  'use strict';
  angular
    .module('baseApp')
    .controller('RoomCtrl', RoomCtrl);

  /* @inject */
  function RoomCtrl(ResolvedDetail, ResolvedMessages, $scope, Message, socket) {
    var detail = this;
    detail.room = ResolvedDetail;
    detail.messages = ResolvedMessages;


    socket.syncUpdates('messages', detail.messages);

    detail.addMessage = addMessage;

    detail.room.all('messages').getList()
      .then(function (data){
        console.log(data)
      })

    /////////////

    function addMessage(){
      if(detail.message !== ''){
        detail.room.all('messages').post({text: detail.message,room:detail.room._id});
        detail.message = '';
      }
    }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('messages');
    });
  }
}).call(this);