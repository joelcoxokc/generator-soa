'use strict'

angular.module '<%= scriptAppName %>'
.controller 'SignupCtrl', ($scope, Auth, $location<% if(filters.oauth) {%>, $window<% } %>) ->
  @user = {}
  @errors = {}
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
        return

      .catch (err) =>
        err = err.data
        @errors = {}

        # Update validity of form fields that match the mongoose errors
        angular.forEach err.errors, (error, field) =>
          form[field].$setValidity 'mongoose', false
          @errors[field] = error.message
        return

    return

<% if(filters.oauth) {%>
  @loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider<% } %>

  return
