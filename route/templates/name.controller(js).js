'use strict';
(function(){
  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

  <%= classedName %>Ctrl
    .$inject = ['$scope'];

  function <%= classedName %>Ctrl($scope) {
    var vm = this;
    vm.name = '<%= name %>';
    vm.value = 0;
    vm.increment = increment;
    //////////////

    function increment(){
      vm.value++;
    }
  };

}).call(this);
