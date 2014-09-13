'use strict'

angular.module '<%= scriptAppName %>'
.controller 'SignupCtrl', ($scope, Auth, $location<% if(filters.oauth) {%>, $window<% } %>) ->
  $scope.errors = {}
  @user = {}
  @register = (form) =>
    @submitted = true

    if form.$valid
      # Account created, redirect to home
      Auth.createUser
        name: @user.name
        email: @user.email
        password: @user.password

      .then ->
        $location.path '/'

      .catch (err) ->
        err = err.data
        $scope.errors = {}

        # Update validity of form fields that match the mongoose errors
        angular.forEach err.errors, (error, field) ->
          form[field].$setValidity 'mongoose', false
          $scope.errors[field] = error.message

<% if(filters.oauth) {%>
  $scope.loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider<% } %>
