'use strict';

angular.module('<%= scriptAppName %>')
  .controller('MainCtrl', function (serverUrl, $scope, $http<% if(filters.socketio) { %>, socket<% } %>) {
    $scope.awesomeThings = [];

    $http.get(serverUrl+'things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;<% if(filters.socketio) { %>
      socket.syncUpdates('thing', $scope.awesomeThings);<% } %>
    });
<% if(filters.mongoose) { %>
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post(serverUrl+'things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete(serverUrl+'things/' + thing._id);
    };<% } %><% if(filters.socketio) { %>

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });<% } %>
  });
