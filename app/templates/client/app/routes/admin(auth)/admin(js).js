'use strict';
(function(){

  angular
  .module('<%= scriptAppName %>')
  .config( admin );

  admin.$inject = ['$stateProvider'];
  function admin($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/routes/admin/admin.html',
        controller: 'AdminCtrl as vm'
      });
  }
}).call(this);