'use strict';

angular.module('<%= scriptAppName %>')
  .factory('User', function ($resource, serverUrl) {
    return $resource(serverUrl+'users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
