;(function(){
  'use strict';
  angular
    .module('testApp')
    .directive('whatsDifferent', whatsDifferent);

  function whatsDifferent(){
    return {
      templateUrl: 'app/directives/whatsDifferent/whatsDifferent.html',
      restrict: 'EA',
      link: link,
      scope: {
        things: '=ngModel'
      }
    };

    ///////////////////

    function link(scope, element, attrs) {

    }

  }
}).call(this);