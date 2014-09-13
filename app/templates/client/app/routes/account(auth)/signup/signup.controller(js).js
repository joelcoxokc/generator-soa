'use strict';
(function(){

  angular
    .module('<%= scriptAppName %>')
    .controller('SignupCtrl', SignupCtrl)

    SignupCtrl.$inject = ['$scope', 'Auth', '$location'<% if (filters.oauth) { %>, '$window'<% } %>];

    function SignupCtrl($scope, Auth, $location<% if (filters.oauth) { %>, $window<% } %>) {
      var vm = this;
      $scope.errors = {};
      vm.user = {};
      vm.register = register;
      vm.loginOauth = loginOauth;

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
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
        }
      };
  <% if(filters.oauth) {%>
      function loginOauth(provider) {
        $window.location.href = '/auth/' + provider;
      }<% } %>
    }

}).call(this);