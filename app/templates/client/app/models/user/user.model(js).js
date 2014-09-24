;(function(){
'use strict';
  angular
    .module('<%= scriptAppName %>')
    .factory('User', User);

  /* @inject */
  function User(Restangular){
    return Restangular.service('users');
  }

}).call(this);