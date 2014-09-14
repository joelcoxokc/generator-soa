'use strict';
(function() {
  angular
    .module('goBack', [])
    .directive('goBack', goBack);

    function goBack() {
      return {
        restrict: 'A',
        controller: ['$scope', '$element', '$window', controller]
      };

      //////////////////////////////

      function controller($scope, $element, $window) {
        return $element.on('click', function() {
          return $window.history.back();
        });
      }
    }

}).call(this);