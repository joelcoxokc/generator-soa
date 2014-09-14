'use strict';
(function() {
  angular
    .module('imgHolder', [])
    .directive('imgHolder', imgHolder);

    function imgHolder() {
      return {
        restrict: 'A',
        link: link
      };

      //////////////////////////////

      function link(scope, ele, attrs) {
        return Holder.run({
          images: ele[0]
        });
      }
    }

}).call(this);