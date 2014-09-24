;(function(){
'use strict';
  angular
    .module('<%= scriptAppName %>')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', 'Auth', '$location'<% if (filters.oauth) { %>, '$window'<% } %>];

    function LoginCtrl($scope, Auth, $location<% if (filters.oauth) { %>, $window<% } %>) {
      var vm = this;
      vm.user = {};
      vm.errors = {};
      vm.login = login;<% if(filters.oauth) {%>
      vm.loginOauth = loginOauth;<% } %>

      ///////////////////////

      function login(form) {
        vm.submitted = true;

        if(form.$valid) {
          Auth.login({
            email: vm.user.email,
            password: vm.user.password
          })
          .then( function() {
            // Logged in, redirect to home
            $location.path('/');
          })
          .catch( function(err) {
            vm.errors.other = err.message;
          });
        }
      }
  <% if(filters.oauth) {%>
      function loginOauth(provider) {
        $window.location.href = '/auth/' + provider;
      }<% } %>
    }

}).call(this);
