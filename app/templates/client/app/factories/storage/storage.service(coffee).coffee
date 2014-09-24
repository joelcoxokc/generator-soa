'use strict'
class Storage
  set: ( key, value )->
    if key is undefined or key is 'undefined' then return
    return localStorage.setItem( key, JSON.stringify( value ) )

  get: (key)->
    value = localStorage.getItem(key)
    JSON.parse(value)

  clear: (key)->
    if key then return delete localStorage[key]
    localStorage.clear()

angular
  .module('<%= scriptAppName %>').service('$storage', Storage)