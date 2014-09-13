'use strict'

angular.module '<%= scriptAppName %>'
  .controller 'SettingsCtrl', ($scope, User, Auth) ->
    @errors = {}
    @changePassword = (form) =>
      @submitted = true

      if form.$valid
        Auth.changePassword @user.oldPassword, @user.newPassword
        .then =>
          @message = 'Password successfully changed.'

        .catch =>
          form.password.$setValidity 'mongoose', false
          $scope.errors.other = 'Incorrect password'
          @message = ''
