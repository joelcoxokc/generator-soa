'use strict'

angular.module '<%= scriptAppName %>'
  .config ($stateProvider) ->
    $stateProvider
    .state 'admin',
      url: '/admin'
      templateUrl: 'app/states/admin/admin.html'
      controller: 'AdminCtrl as vm',
      resolve:
        resolvedUsers: (UserModel)->
          return UserModel.getList()
            .then (data)->
              console.log('resolved', data)
              return data

