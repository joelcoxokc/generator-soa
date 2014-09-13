'use strict';
(function(){
  angular
    .module('<%= scriptAppName %>')
    .config( <%= classedName %> );

  <%= classedName %>
    .$inject = ['$stateProvider'];
  function <%= classedName %>($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Ctrl as vm'
      });
  };

}).call(this);
