'use-strict'
angular
  .module('<%= scriptAppName %>')
  .factory 'User', (Restangular)->
    return Restangular.service('users')
