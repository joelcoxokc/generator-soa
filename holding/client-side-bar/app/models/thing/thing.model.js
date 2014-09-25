;(function(){
'use strict';

  angular
    .module('testerApp')
    .factory('Thing', Thing);
    /* @inject */
    function Thing(Restangular) {
      return Restangular.service('things');
    }

}).call(this);
