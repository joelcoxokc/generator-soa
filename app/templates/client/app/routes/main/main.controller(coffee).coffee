'use strict'

angular
  .module '<%= scriptAppName %>'
  .controller 'MainCtrl', ($scope, Thing<% if(filters.socketio) { %>, socket<% } %>) ->

    @awesomeThings = []

    @getThings()


    @getThings = ()=>
      Thing
        .getList()
        .then (data)=>
          @awesomeThings = data<% if(filters.socketio) { %>
          socket.syncUpdates 'things', $scope.awesomeThings<% } %>

  <% if(filters.mongoose) { %>
    @addThing = =>
      return if $scope.newThing is ''
      @awesomeThings.post({name: @newThing})
      @newThing = ''

    @deleteThing = (thing) =>
      @awesomeThings.one(thing._id).remove()<% } %><% if(filters.socketio) { %>

    $scope.$on '$destroy', ->
      socket.unsyncUpdates 'things'<% } %>
