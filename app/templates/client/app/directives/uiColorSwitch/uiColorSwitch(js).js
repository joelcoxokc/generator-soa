'use strict';
(function() {
  angular
    .module('uiColorSwitch', [])
    .directive('uiColorSwitch', uiColorSwitch);

    function uiColorSwitch() {
      return {
        restrict: 'A',
        link: link
      };

      //////////////////////////////

      function link(scope, ele, attrs) {
        return ele.find('.color-option').on('click', function(event) {
          var $this, hrefUrl, style;
          $this = $(this);
          hrefUrl = void 0;
          style = $this.data('style');
          if (style === 'loulou') {
            hrefUrl = 'styles/main.css';
            $('link[href^="styles/main"]').attr('href', hrefUrl);
          } else if (style) {
            style = '-' + style;
            hrefUrl = 'styles/main' + style + '.css';
            $('link[href^="styles/main"]').attr('href', hrefUrl);
          } else {
            return false;
          }
          return event.preventDefault();
        });
      }
    }

}).call(this);