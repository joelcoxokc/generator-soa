'use strict'
  angular
    .module('<%= scriptAppName %>')
    .factory('Room', (Restangular)->
      Restangular.service('rooms')