'use strict';
(function() {
  angular
    .module('customBackground', [])
    .directive('customBackground', customBackground);

    function customBackground() {
      return {
        restrict: 'A',
        controller:[ '$scope', '$element', '$location', controller]
      };

      //////////////////////////////

      function controller($scope, $element, $location) {
          var addBg, path;
          path = function() {
            return $location.path();
          };
          addBg = function(path) {
            $element.removeClass('body-home body-special body-tasks body-lock');
            switch (path) {
              case '/':
                return $element.addClass('body-home');
              case '/404':
              case '/pages/500':
              case '/login':
              case '/signup':
              case '/pages/forgot':
                return $element.addClass('body-special');
              case '/lock-screen':
                return $element.addClass('body-special body-lock');
              case '/tasks':
                return $element.addClass('body-tasks');
            }
          };
          addBg($location.path());
          return $scope.$watch(path, function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            return addBg($location.path());
          });
      }
    }

}).call(this);