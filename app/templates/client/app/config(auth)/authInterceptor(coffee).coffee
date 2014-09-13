'use strict'
angular
  .module('<%= scriptAppName %>')
  .factory 'authInterceptor', ($rootScope, $q, $cookieStore, $location) ->
    # Add authorization token to headers
    request: (config) ->
      config.headers = config.headers or {}
      config.headers.Authorization = 'Bearer ' + $cookieStore.get 'token' if $cookieStore.get 'token'
      config

    # Intercept 401s and redirect you to login
    responseError: (response) ->
      if response.status is 401
        $location.path '/login'
        # remove any stale tokens
        $cookieStore.remove 'token'

      $q.reject response
