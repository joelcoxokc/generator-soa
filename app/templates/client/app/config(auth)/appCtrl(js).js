'use strict';
(function() {
  angular
    .module('<%= scriptAppName %>')
    .controller('AppCtrl', AppCtrl)
    .controller('NavCtrl', NavCtrl);

    AppCtrl.$inject = ['$scope', '$location', 'Auth', 'uiPages'];
    function AppCtrl($scope, $location, Auth, uiPages) {
      console.log($scope)
      $scope.isSpecificPage = function() {
        var path;
        path = $location.path();
        return _.contains(['/404', '/pages/500', '/login', '/signup', '/pages/signin1', '/pages/signin2', '/pages/signup', '/pages/signup1', '/pages/signup2', '/pages/forgot', '/lock-screen'], path);
      };
      var pages = uiPages.all();
      $scope.menu = [{
        'title': 'Home',
        'link': '/'
      }];
      for(var key in pages){
        var page = {
          title: key,
          icon: pages[key].icon,
          subPages: []
        };
        for (var i = 0; i < pages[key].children.length; i++) {
          var url = '/' +key+ '/'+ pages[key].children[i]
          var state = 'page-' + key +'-'+ pages[key].children[i];
          page.subPages.push({title: pages[key].children[i], link: url});
        }
        $scope.menu.push(page)
      }
      console.log($scope.menu)
      $scope.isCollapsed = true;
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.isAdmin = Auth.isAdmin;
      $scope.getCurrentUser = Auth.getCurrentUser;

      $scope.logout = function() {
        Auth.logout();
        $location.path('/login');
      };

      $scope.isActive = function(route) {
        return route === $location.path();
      };
      return $scope.main = {
        brand: 'Square',
        name: 'Lisa Doe'
      };
    }
    NavCtrl.$inject = ['$scope', 'taskStorage', 'filterFilter'];
    function NavCtrl($scope, taskStorage, filterFilter) {
      var tasks;

      tasks = $scope.tasks = taskStorage.get();
      $scope.taskRemainingCount = filterFilter(tasks, {
        completed: false
      }).length;
      return $scope.$on('taskRemaining:changed', function(event, count) {
        return $scope.taskRemainingCount = count;
      });
    }

}).call(this);
