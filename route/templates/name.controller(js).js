'use strict';
(function(){

  var <%= classedName %>Ctrl = function ($scope,  <%= cameledName %>) {
    var vm = this;
    vm.someMethod = someMethod;

    //////////////

    function someMethod(){
      vm.stuff = 'stuff';
    }
  };
  <%= classedName %>Ctrl
    .$inject = ['$scope'];

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);
}).call(this);
