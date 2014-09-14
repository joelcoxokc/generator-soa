'use strict';
(function() {
  angular
    .module('toggleOffCanvas', [])
    .directive('toggleOffCanvas', toggleOffCanvas);

    function toggleOffCanvas() {
      return {
        restrict: 'A',
        link: link
      };

      //////////////////////////////

      function link(scope, ele, attrs) {
        return ele.on('click', function() {
          return $('#app').toggleClass('on-canvas');
        });
      }
    }

}).call(this);