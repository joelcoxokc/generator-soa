;(function(){
  'use strict';
  angular
    .module('baseApp')
    .config( Message );

  Message.$inject = ['$stateProvider'];
  function Message($stateProvider) {
    $stateProvider
      .state('message', {
        url: '/messages',
        templateUrl: 'app/states/message/message.html',
        controller: 'MessageCtrl as vm'
      });
  }
}).call(this);