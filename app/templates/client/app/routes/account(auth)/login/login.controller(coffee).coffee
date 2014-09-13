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

      .catch (err) ->
        @errors.other = err.message
<% if(filters.oauth) {%>
  @loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider<% } %>
