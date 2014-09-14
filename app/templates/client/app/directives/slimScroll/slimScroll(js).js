'use strict';
(function() {
  angular
    .module('slimScroll', [])
    .directive('slimScroll', slimScroll);

    function slimScroll() {
      return {
        restrict: 'A',
        link: link
      };

      //////////////////////////////

      function link(scope, ele, attrs) {
        return ele.slimScroll({
          height: attrs.scrollHeight || '100%'
        });
      }
    }

}).call(this);