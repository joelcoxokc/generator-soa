'use strict'
  angular
    .module('<%= scriptAppName %>')
    .factory('Message', (Restangular)->
      Restangular.service('messages')