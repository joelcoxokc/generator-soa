'use strict';
(function(){
angular
  .module('<%= scriptAppName %>', [<%= angularModules %>])
  .config( appConfiguration )
  .run( appRun );

  appConfiguration
    .$inject = ['RestangularProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider'<% if(filters.auth) { %>, '$httpProvider'<% } %>]

  ///////////

  function appConfiguration(RestangularProvider, $stateProvider, $urlRouterProvider, $locationProvider<% if(filters.auth) { %>, $httpProvider<% } %>) {
    $urlRouterProvider
      .otherwise('/');
    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.setRestangularFields({
      id: "_id",
      route: "restangularRoute",
      selfLink: "self.href"
    });

    $locationProvider.html5Mode(true);<% if(filters.auth) { %>
    $httpProvider.interceptors.push('authInterceptor');<% } %>
  }
  <% if(filters.auth) { %>
  function appRun($rootScope, $location, Auth) {
  // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on(<% if(filters.ngroute) { %>'$routeChangeStart'<% } %><% if(filters.uirouter) { %>'$stateChangeStart'<% } %>, function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  }<% } %>

}).call(this);