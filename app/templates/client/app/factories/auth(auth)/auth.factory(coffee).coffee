'use strict'

angular.module '<%= scriptAppName %>'
.factory 'Auth', (User, $storage, serverUrl, $location, $rootScope, $http, $q) ->
  currentUser = {}
  if $storage.get 'user_token'
    currentUser = User.one('me').get().$object


  ###
  Authenticate user and save token

  @param  {Object}   user     - login info
  @param  {Function} callback - optional
  @return {Promise}
  ###
  login: (user, callback) ->
    deferred = $q.defer()
    $http.post serverUrl+'auth/local',
      email: user.email
      password: user.password

    .success (res) ->
      $storage.set 'user_token', res.token
      currentUser = User.one('me').get().$object
      deferred.resolve res
      callback?()

    .error (err) =>
      @logout()
      deferred.reject err
      callback? err

    deferred.promise


  ###
  Delete access token and user info

  @param  {Function}
  ###
  logout: ->
    $storage.clear 'user_token'
    currentUser = {}
    return


  ###
  Create a new user

  @param  {Object}   user     - user info
  @param  {Function} callback - optional
  @return {Promise}
  ###
  createUser: (user, callback) ->
    User
      .post( user)
      .then (data) ->
        $storage.set 'user_token', data.token
        currentUser = User.one('me').get().$object
        callback? data
      .catch (err) =>
        @logout()
        callback? err


  ###
  Change password

  @param  {String}   oldPassword
  @param  {String}   newPassword
  @param  {Function} callback    - optional
  @return {Promise}
  ###
  changePassword: (oldPassword, newPassword, callback) ->
    User
      .one(currentUser._id)
      .one('password')
      .put(
        {
          id: currentUser._id
        },{
          oldPassword: oldPassword
          newPassword: newPassword
        }
      )
      .then (user) ->
        callback? user
      .catch (err) ->
        callback? err


  ###
  Gets all available info on authenticated user

  @return {Object} user
  ###
  getCurrentUser: ->
    currentUser


  ###
  Check if a user is logged in synchronously

  @return {Boolean}
  ###
  isLoggedIn: ->
    currentUser.hasOwnProperty 'role'


  ###
  Waits for currentUser to resolve before checking if user is logged in
  ###
  isLoggedInAsync: (callback) ->
    if currentUser.hasOwnProperty '$promise'
      currentUser.$promise.then ->
        callback? true
        return
      .catch ->
        callback? false
        return

    else
      callback? currentUser.hasOwnProperty 'role'

  ###
  Check if a user is an admin

  @return {Boolean}
  ###
  isAdmin: ->
    currentUser.role is 'admin'


  ###
  Get auth token
  ###
  getToken: ->
    $storage.get 'user_token'
