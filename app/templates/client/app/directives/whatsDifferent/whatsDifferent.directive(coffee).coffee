'use strict'
angular
  .module('<%= scriptAppName %>')
  .directive 'whatsDifferent', ()->
    return {
      templateUrl: 'app/directives/whatsDifferent/whatsDifferent.html',
      restrict: 'EA',
      scope: {
        things: '=ngModel'
      }
      link: (scope, element, attrs)->
    }