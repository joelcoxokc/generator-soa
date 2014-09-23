'use strict'

angular.module '<%= scriptAppName %>'
.controller 'MainCtrl', (serverUrl, $scope, $http<% if(filters.socketio) { %>, socket<% } %>) ->
  $scope.awesomeThings = []

  $http.get(serverUrl+'things').success (awesomeThings) ->
    $scope.awesomeThings = awesomeThings
    <% if(filters.socketio) { %>socket.syncUpdates 'thing', $scope.awesomeThings<% } %>
<% if(filters.mongoose) { %>
  $scope.addThing = ->
    return if $scope.newThing is ''
    $http.post serverUrl+'things',
      name: $scope.newThing

    $scope.newThing = ''

  $scope.deleteThing = (thing) ->
    $http.delete serverUrl+'things/' + thing._id<% } %><% if(filters.socketio) { %>

  $scope.$on '$destroy', ->
    socket.unsyncUpdates 'thing'<% } %>
