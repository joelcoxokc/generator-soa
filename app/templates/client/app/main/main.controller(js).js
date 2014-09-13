'use strict';
(function(){

  var MainCtrl = function ($scope, Thing<% if(filters.socketio) { %>, socket<% } %>) {

    $scope.awesomeThings = [];
    $scope.getThings = getThings;
    <% if(filters.mongoose) { %>$scope.addThing = addThing;
    $scope.deleteThing = deleteThing;<% } %>

    $scope.getThings()
    ////////////////////
    function getThings(){
      Thing
        .getList()
        .then(function (data){
          $scope.awesomeThings = data;<% if(filters.socketio) { %>
          socket.syncUpdates('thing', $scope.awesomeThings);<% } %>
        });
    }
  <% if(filters.mongoose) { %>
    function addThing() {
      if($scope.newThing === '') {
        return;
      }
      $scope.awesomeThings.post({name: $scope.newThing});
      $scope.newThing = '';
    }

    function deleteThing(thing) {
      thing.remove();
    }<% } %><% if(filters.socketio) { %>

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });<% } %>
  };

  MainCtrl.$inject = ['$scope', 'Thing'<% if(filters.socketio) { %>, 'socket'<% } %>];
  angular
    .module('<%= scriptAppName %>')
    .controller('MainCtrl', MainCtrl);
}).call(this);
