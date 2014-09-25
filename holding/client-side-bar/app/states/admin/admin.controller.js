;(function(){
'use strict';

  angular
    .module('testerApp')
    .controller( 'AdminCtrl', AdminCtrl );

  /* @inject */
  function AdminCtrl($scope, Auth, User, resolvedUsers, $location) {
    var vm = this;
    vm.details = false;
    vm.currentUser = null;
    vm.users = resolvedUsers;
    vm.destroy = destroy;
    vm.showUser = showUser;
    vm.hideUser = hideUser;

    //////////////

    function showUser(user){
      if(vm.currentUser && vm.currentUser._id === user._id) {
        return hideUser();
      }
      vm.currentUser = user;
      vm.details = true;
    }
    function hideUser(){
      vm.currentUser = null;
      vm.details = false;
    }

    function destroy(user) {
      user.remove();
      angular.forEach(vm.users, function(u, i) {
        if (u === user) {
          vm.users.splice(i, 1);
        }
      });
    }
  }

}).call(this);