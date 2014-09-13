'use strict';
(function(){

  var <%= classedName %>Ctrl = function ($scope,  <%= classedName %>) {
    var vm = this;
    <% if(filters.restangular){ %>
    <%= classedName %>.getList()
      .then(function (data){
        vm.<%= name %>s = data;
      });
    <% } else { %>
    <%= classedName %>.all()
      .then(function (data){
        vm.<%= name %>s = data;
      });
    <% } %>
    // $scope.message = 'Hello';
  };
  <%= classedName %>Ctrl
    .$inject = ['$scope', '<%= classedName %>'];

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);
}).call(this);
