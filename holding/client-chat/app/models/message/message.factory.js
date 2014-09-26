;(function(){
'use strict';

  angular
    .module('baseApp')
    .factory('Message', Message);
    /* @inject */
    function Message(Restangular) {
      return Restangular.service('messages');
    }

}).call(this);
