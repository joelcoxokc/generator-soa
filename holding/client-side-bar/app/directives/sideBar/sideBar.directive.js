;(function(){
  'use strict';
  angular
    .module('sideBar', [])
    .directive('sideBar', sideBar);

  /* @inject */

  function sideBar(){
    return {
      templateUrl: 'app/directives/sideBar/sideBar.html',
      restrict: 'EA',
      link: link
    };

    ///////////////////

    function link(scope, element, attrs) {
      console.log(element)
    }

  }
}).call(this);