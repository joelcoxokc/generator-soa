'use strict';
(function(){

  var <%= classedName %>Ctrl = function (resolved<%= classedName %>, $scope,  <%= classedName %>) {
    var vm = this;
    vm.<%= name %>s = resolved<%= classedName %>;


  };
  <%= classedName %>Ctrl
    .$inject = ['resolved<%= classedName %>', '$scope', '<%= classedName %>'];

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);
}).call(this);
