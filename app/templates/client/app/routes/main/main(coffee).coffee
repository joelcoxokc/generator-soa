'use strict'

angular
  .module '<%= scriptAppName %>'
  .config ($stateProvider) ->
    $stateProvider
      .state 'main',
        url: '/'
        templateUrl: 'app/main/main.html'
        controller: 'MainCtrl as vm'