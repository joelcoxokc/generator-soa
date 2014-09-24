;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>')
  .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', '$cookieStore', '$location'];
  function authInterceptor($rootScope, $q, $cookieStore, $location){
    return {
      request:request,
      responseError: responseError
    };
    // Add authorization token to headers
    function request(config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('token')) {
        config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
      }
      return config;
    }

    // Intercept 401s and redirect you to login
    function responseError(response) {
      if(response.status === 401) {
        $location.path('/login');
        // remove any stale tokens
        $cookieStore.remove('token');
        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    }
  }
}).call(this);