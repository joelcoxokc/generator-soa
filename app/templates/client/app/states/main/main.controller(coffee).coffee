'use strict'

angular
  .module '<%= scriptAppName %>'
  .controller 'MainCtrl', ($scope, Thing<% if(filters.socketio) { %>, socket<% } %>) ->

    @awesomeThings = []


    Thing
      .getList()
      .then (data)=>
        @awesomeThings = data<% if(filters.socketio) { %>
        socket.syncUpdates 'things', @awesomeThings<% } %>

  <% if(filters.mongoose) { %>
    @addThing = =>
      if @newThing is ''
        @awesomeThings.post({name: @newThing})
        @newThing = ''
      return

    @deleteThing = (thing) =>
      @awesomeThings.one(thing._id).remove()
      return<% } %><% if(filters.socketio) { %>

    $scope.$on '$destroy', ->
      socket.unsyncUpdates 'things'<% } %>

    return
