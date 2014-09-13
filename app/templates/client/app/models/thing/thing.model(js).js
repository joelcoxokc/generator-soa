'use strict';
(function(){

  var Thing = function (Restangular) {
    return Restangular.service('things');
  };


  Thing
    .$inject = ['Restangular'];
  angular.module('<%= scriptAppName %>')
    .factory('Thing', Thing);

}).call(this);
