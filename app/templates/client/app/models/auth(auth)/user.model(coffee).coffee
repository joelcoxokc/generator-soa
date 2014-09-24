'use-strict'
angular
  .module('<%= scriptAppName %>')
  .factory 'UserModel', (Restangular)->
    return Restangular.service('users')
