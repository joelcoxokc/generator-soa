'use strict'

angular.module '<%= scriptAppName %>'
.factory 'Thing', (Restangular)->
  # Service logic
  # ...
  return Restangular.service 'things'
