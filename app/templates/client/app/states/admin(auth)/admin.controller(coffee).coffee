'use strict'

angular.module '<%= scriptAppName %>'
.controller 'AdminCtrl', ($scope, Auth, User, resolvedUsers, $location) ->

  @init = ()=>
    @details = false
    @currentUser = null
    @users = resolvedUsers
    @remove = remove
    @showUser = showUser
    @hideUser = hideUser


  showUser = (user)=>
    if @currentUser and @currentUser._id is user._id then return hideUser()
    @currentUser = user
    @details = true
    return

  hideUser = ()=>
    @currentUser = null
    @details = false
    return


  remove = (user)=>
    User.remove({ id: user._id })
    angular.forEach @users, (u, i)=>
      if u is user
        @users.splice(i, 1)
    return

  @init()
  return

