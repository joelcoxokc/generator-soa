'use strict';
(function(){
  var <%= classedName %> = function ($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Ctrl as vm'
      });
  };
  <%= classedName %>
    .$inject = ['$stateProvider'];
  angular
    .module('<%= scriptAppName %>')
    .config( <%= classedName %> );
}).call(this);
