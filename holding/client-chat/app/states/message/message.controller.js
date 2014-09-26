;(function(){
  'use strict';
  angular
    .module('baseApp')
    .controller('MessageCtrl', MessageCtrl);

  /* @inject */
  function MessageCtrl($scope, Message) {
    $scope.message = 'Hello';
  }
}).call(this);