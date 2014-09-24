;(function(){
'use strict';

  angular
    .module('<%= scriptAppName %>')
    .controller('SignupCtrl', SignupCtrl);

    /* @inject */
    function SignupCtrl($scope, Auth, $location<% if (filters.oauth) { %>, $window<% } %>) {
      var vm = this;
      vm.errors = {};
      vm.user = {};
      vm.register = register;<% if(filters.oauth) {%>
      vm.loginOauth = loginOauth;<% } %>

      //////////////

      function register(form) {
        vm.submitted = true;

        if(form.$valid) {
          Auth.createUser({
            name: vm.user.name,
            email: vm.user.email,
            password: vm.user.password
          })
          .then( function() {
            // Account created, redirect to home
            $location.path('/');
          })
          .catch( function(err) {
            err = err.data;
            vm.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              vm.errors[field] = error.message;
            });
          });
        }
      }
  <% if(filters.oauth) {%>
      function loginOauth(provider) {
        $window.location.href = '/auth/' + provider;
      }<% } %>
    }

}).call(this);