'use strict';
(function(){
  var <%= classedName %> = function ($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Ctrl as vm',
        resolve: {
          resolved<%= classedName %>: resolved<%= classedName %>
        }
      });

    //////////////

    function resolved<%= classedName %>(<%= classedName %>){
    <% if(filters.restangular){ %>
      return <%= classedName %>.getList()
        .then(function (data){
          return data;
        });
    <% } else { %>
      return <%= classedName %>.all()
        .then(function (data){
          return data;
        });
    <% } %>

    }
  };
  <%= classedName %>
    .$inject = ['$stateProvider'];
  angular
    .module('<%= scriptAppName %>')
    .config( <%= classedName %> );
}).call(this);
