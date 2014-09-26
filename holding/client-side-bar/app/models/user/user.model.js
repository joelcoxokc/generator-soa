;(function(){
'use strict';
  angular
    .module('testerApp')
    .factory('User', User);

  /* @inject */
  function User(Restangular){
    return Restangular.service('users');
  }

}).call(this);