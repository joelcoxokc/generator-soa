'use strict'

angular.module '<%= scriptAppName %>'
.controller 'LoginCtrl', ($scope, Auth, $location<% if(filters.oauth) {%>, $window<% } %>) ->

  @user = {}
  @errors = {}

  @login = (form) =>
    @submitted = true

    if form.$valid
      # Logged in, redirect to home
      Auth.login
        email: @user.email
        password: @user.password

      .then ->
        $location.path '/'
        return

      .catch (err) =>
        @errors.other = err.message

    return

<% if(filters.oauth) {%>
  @loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider<% } %>

  return
