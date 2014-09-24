;(function(){
'use strict';

  angular
    .module('<%= scriptAppName %>')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'Thing'<% if(filters.socketio) { %>, 'socket'<% } %>];

  function MainCtrl($scope, Thing<% if(filters.socketio) { %>, socket<% } %>) {
    var vm = this;
    vm.awesomeThings = [];
    vm.getThings = getThings;
    <% if(filters.mongoose) { %>vm.addThing = addThing;
    vm.deleteThing = deleteThing;<% } %>

    vm.getThings();


    ////////////////////
    function getThings(){
      Thing
        .getList()
        .then(function (data){
          vm.awesomeThings = data;<% if(filters.socketio) { %>
          socket.syncUpdates('things', vm.awesomeThings);<% } %>
        });
    }
  <% if(filters.mongoose) { %>
    function addThing() {
      if(vm.newThing === '') {
        return;
      }
      vm.awesomeThings.post({name: vm.newThing});
      vm.newThing = '';
    }

    function deleteThing(thing) {
      vm.awesomeThings.one(thing._id).remove();
    }<% } %><% if(filters.socketio) { %>

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('things');
    });<% } %>
  }
}).call(this);
