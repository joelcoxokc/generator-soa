'use strict'

angular.module '<%= scriptAppName %>'
.factory '<%= cameledName %>', ->

  _size = 0
  _storage = {};

  push: (value)->
    _storage[_size] = value;
    _size++

  pop: ->
    if _size > 0 then _size--
    result = _storage[_size]
    delete _storage[_size]
    return result

  size: ->
    _size