;(function(){
'use strict';
  angular
    .module('<%= scriptAppName %>')
    .factory('User', User);

    User.$inject = ['serverUrl', '$resource'];
    function User(serverUrl, $resource) {
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
    }
}).call(this);