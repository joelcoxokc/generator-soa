;(function(){
'use strict';

  angular
    .module('<%= scriptAppName %>')
    .factory('Message', Message);
    /* @inject */
    function Message(Restangular) {
      return Restangular.service('messages');
    }

}).call(this);
