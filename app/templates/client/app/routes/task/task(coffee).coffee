'use strict';
  angular
    .module('<%= scriptAppName %>')
    .config ($stateProvider)->
      $stateProvider
        .state 'task', {
          url: '/tasks',
          templateUrl: 'app/routes/task/task.html',
          controller: 'TaskCtrl as vm'
        }
