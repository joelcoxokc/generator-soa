;(function(){
'use strict';
  angular
    .module('testApp')
    .factory('User', User);

  /* @inject */
  function User(Restangular){
    return Restangular.service('users');
  }

}).call(this);