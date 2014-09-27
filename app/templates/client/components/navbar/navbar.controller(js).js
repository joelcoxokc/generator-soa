;(function(){
'use strict';

angular
  .module('<%= scriptAppName %>')
  .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['$scope', '$location'<% if(filters.auth) {%>, 'Auth'<% } %>];
  function NavbarCtrl($scope, $location<% if(filters.auth) {%>, Auth<% } %>) {
    var vm = this;
    vm.menu = [{
      'title': 'Home',
      'link': '/',
      'icon':'fa-home',
      'color':'default'
    },{
      'title': 'Rooms',
      'link': '/rooms',
      'icon':'fa-comments-o',
      'color':'success'
    }
    ];

    vm.isCollapsed = true;<% if(filters.auth) {%>
    vm.isLoggedIn = Auth.isLoggedIn;
    vm.isAdmin = Auth.isAdmin;
    vm.getCurrentUser = Auth.getCurrentUser;
    vm.logout = logout;
    vm.isActive = isActive;

    function logout() {
      Auth.logout();
      $location.path('/login');
    }<% } %>

    function isActive(route) {
      return route === $location.path();
    }
  }
}).call(this);