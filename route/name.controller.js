'use strict';

angular.module('<%= scriptAppName %>')
  .controller('<%= classedName %>Ctrl', function ($scope, <%= cameledName %>) {
    var vm = this;
    <%= cameledName %>.get()
      .then(function (data){
        vm.<%= name %>s = data;
      });
    // $scope.message = 'Hello';
  });
