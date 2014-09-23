'use strict'

angular.module '<%= scriptAppName %>'
.factory 'User', ($resource, serverUrl) ->
  $resource serverUrl+'users/:id/:controller',
    id: '@_id'
  ,
    changePassword:
      method: 'PUT'
      params:
        controller: 'password'

    get:
      method: 'GET'
      params:
        id: 'me'

