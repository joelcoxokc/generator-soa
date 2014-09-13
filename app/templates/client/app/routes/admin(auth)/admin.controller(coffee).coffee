'use strict'

angular.module '<%= scriptAppName %>'
.controller 'AdminCtrl', ($scope, $http, Auth, User) ->

  $http.get '/api/users'
  .success (users) =>
    @users = users

  @remove = (user) =>
    User.remove id: user._id
    _.remove @users, user