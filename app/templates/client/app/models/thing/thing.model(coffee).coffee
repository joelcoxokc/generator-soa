'use strict'

angular.module 'app'
.factory 'Thing', (Restangular)->
  # Service logic
  # ...
  return Restangular.service 'things'
