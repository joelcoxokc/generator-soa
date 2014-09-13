'use strict';
(function(){

  angular
  .module('<%= scriptAppName %>')
  .controller( 'AdminCtrl', AdminCtrl );

  AdminCtrl.$inject = ['$scope', 'Auth', 'User']
  function AdminCtrl($scope, Auth, User) {
    var vm = this;
    // Use the User $resource to fetch all users
    vm.users = User.query();
    vm.remove = remove;

    //////////////

    function remove(user) {
      User.remove({ id: user._id });
      angular.forEach(vm.users, function(u, i) {
        if (u === user) {
          vm.users.splice(i, 1);
        }
      });
    };
  }

}).call(this);