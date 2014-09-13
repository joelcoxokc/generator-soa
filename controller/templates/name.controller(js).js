'use strict';
(function(){

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

    <%= classedName %>Ctrl
      .$inject = ['$scope'];
    function <%= classedName %>Ctrl($scope) {
      $scope.message = 'Hello';
    }

}).call(this);
