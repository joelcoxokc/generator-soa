;(function(){
'use strict';

  angular
    .module('<%= scriptAppName %>')
    .config( admin );

  admin.$inject = ['$stateProvider'];
  function admin($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/states/admin/admin.html',
        controller: 'AdminCtrl as vm',
        resolve: {
          resolvedUsers: resolvedUsers
        }
      });
    resolvedUsers.$inject = ['UserModel'];
    function resolvedUsers(UserModel){
      return UserModel.getList()
        .then(function (data){
          console.log('resolved', data);
          return data;
        });
    }
  }
}).call(this);