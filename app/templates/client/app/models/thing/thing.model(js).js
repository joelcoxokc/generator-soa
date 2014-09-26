;(function(){
'use strict';

  angular
    .module('<%= scriptAppName %>')
    .factory('Thing', Thing);
    /* @inject */
    function Thing(Restangular) {
      return Restangular.service('things');
    }

}).call(this);
