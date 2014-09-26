;(function(){
'use strict';
  angular
    .module('baseApp')
    .factory('User', User);

  /* @inject */
  function User(Restangular){
    return Restangular.service('users');
  }

}).call(this);