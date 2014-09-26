;(function(){
  'use strict';
  angular
    .module('toggleOffCanvas', [])
    .directive('toggleOffCanvas', toggleOffCanvas);

  function toggleOffCanvas(){
    return {
      restrict: 'A',
      link: link
    };

    ///////////////////

    function link(scope, element, attrs) {
      console.log(element)
      element.on('click', function(){
        console.log('hello')
        $('#site-wrapper').toggleClass('show-nav');
      })
    }

  }
}).call(this);