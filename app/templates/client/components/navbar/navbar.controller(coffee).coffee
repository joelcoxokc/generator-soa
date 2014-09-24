'use strict'

angular.module '<%= scriptAppName %>'
.controller 'NavbarCtrl', ($scope, $location<% if(filters.auth) {%>, Auth<% } %>) ->
  @menu = [
    title: 'Home'
    link: '/'
  ]
  @isCollapsed = true<% if(filters.auth) {%>
  @isLoggedIn = Auth.isLoggedIn
  @isAdmin = Auth.isAdmin
  @getCurrentUser = Auth.getCurrentUser

  @logout = ->
    Auth.logout()
    $location.path '/login'<% } %>

  @isActive = (route) ->
    route is $location.path()

  return