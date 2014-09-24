;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>', [
    <%= angularModules %>
  ])
  .constant('serverBaseUrl', 'http://localhost:9000')
  .constant('serverUrl', 'http://localhost:9000/api/')
  .config( appConfig )<% if(filters.auth) { %>
  .run( run );<% } %>

  /* @inject */
  function appConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $locationProvider<% if(filters.auth) { %>, $httpProvider<% } %>) {
    $urlRouterProvider
      .otherwise('/');

    RestangularProvider.setBaseUrl('http://localhost:9000/api/');
    RestangularProvider.setRestangularFields({
      id: '_id',
      route: 'restangularRoute',
      selfLink: 'self.href'
    });

    $locationProvider.html5Mode(true);<% if(filters.auth) { %>
    $httpProvider.interceptors.push('authInterceptor');<% } %>
  }
  <% if(filters.auth) { %>
  /* @inject */
  function run($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  }<% } %>

}).call(this);