;(function(){
'use strict';

  angular
    .module('baseApp')
    .factory('Tool', Tool);
    /* @inject */
    function Tool(Restangular) {
      return Restangular.service('tools');
    }

}).call(this);
