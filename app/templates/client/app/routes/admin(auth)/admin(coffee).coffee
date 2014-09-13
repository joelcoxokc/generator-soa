'use strict'

angular.module '<%= scriptAppName %>'
  .config ($stateProvider) ->
    $stateProvider
    .state 'admin',
      url: '/admin'
      templateUrl: 'app/routes/admin/admin.html'
      controller: 'AdminCtrl as vm'