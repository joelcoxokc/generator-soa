'use strict';
(function() {
  angular
    .module('collapseNav', [])
    .directive('collapseNav', collapseNav);

    function collapseNav() {
      return {
        restrict: 'A',
        link: link
      };

      //////////////////////////////

      function link(scope, ele, attrs) {
        var $a, $aRest, $lists, $listsRest, app;
        $lists = ele.find('ul').parent('li');
        $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>');
        $a = $lists.children('a');
        $listsRest = ele.children('li').not($lists);
        $aRest = $listsRest.children('a');
        app = $('#app');
        $a.on('click', function(event) {
          var $parent, $this;
          if (app.hasClass('nav-min')) {
            return false;
          }
          $this = $(this);
          $parent = $this.parent('li');
          $lists.not($parent).removeClass('open').find('ul').slideUp();
          $parent.toggleClass('open').find('ul').stop().slideToggle();
          return event.preventDefault();
        });
        $aRest.on('click', function(event) {
          return $lists.removeClass('open').find('ul').slideUp();
        });
        return scope.$on('minNav:enabled', function(event) {
          return $lists.removeClass('open').find('ul').slideUp();
        });
      }
    }

}).call(this);