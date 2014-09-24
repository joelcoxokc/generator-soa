;(function(){
'use strict';

  angular
    .module('<%= scriptAppName %>')
    .factory('Thing', Thing);
    Thing.$inject = ['Restangular'];

    function Thing(Restangular) {
      return Restangular.service('things');
    }

}).call(this);
