;(function(){
'use strict';

  angular
    .module('<%= scriptAppName %>')
    .factory('Room', Room);
    /* @inject */
    function Room(Restangular) {
      return Restangular.service('rooms');

    }

}).call(this);
