'use strict'

angular
  .module '<%= scriptAppName %>', [<%= angularModules %>]
.config ($stateProvider, $urlRouterProvider, $locationProvider<% if(filters.auth) { %>, $httpProvider<% } %>) ->
  $urlRouterProvider
  .otherwise '/'

  $locationProvider.html5Mode true<% if(filters.auth) { %>
  $httpProvider.interceptors.push 'authInterceptor'<% } %>
<% } %><% if(filters.auth) { %>
.run ($rootScope, $location, Auth) ->
  # Redirect to login if route requires auth and you're not logged in
  $rootScope.$on <% if(filters.ngroute) { %>'$routeChangeStart'<% } %><% if(filters.uirouter) { %>'$stateChangeStart'<% } %>, (event, next) ->
    Auth.isLoggedInAsync (loggedIn) ->
      $location.path "/login" if next.authenticate and not loggedIn
<% } %>