'use strict'

angular.module 'app'
.factory 'Thing', (Restangular)->
  # Service logic
  # ...
  API = Restangular.all('things')


  # Public API here
  all: ->
    API.getList()
  find: (id)->
    Restangular.one('things', id).get()
  create: (data)->
    API.post(data)
  update: (id, data)->
    Restangular.one('things', id).put(data)
  destroy: (id)->
    Restangular.one('things', id).remove()
