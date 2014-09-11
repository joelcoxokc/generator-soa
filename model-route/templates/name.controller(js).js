'use strict';
(function(){

  var <%= classedName %>Ctrl = function ($scope,  <%= cameledName %>) {
    var vm = this;

    <%= cameledName %>.get()
      .then(function (data){
        vm.<%= name %>s = data;
      });
    // $scope.message = 'Hello';
  };
  <%= classedName %>Ctrl
    .$inject = ['$scope', '<%= cameledName %>'];
    // .$inject = ['$scope', '<%= cameledName %>Service'];

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);
}).call(this);
