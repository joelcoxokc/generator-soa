'use strict';
(function(){

  var <%= classedName %>Ctrl = function (resolved<%= classedName %>, $scope,  <%= classedName %>, <%= classedName %>Socket) {
    var vm = this;
    vm.<%= name %>s = resolved<%= classedName %>;
    <%= classedName %>Socket.syncUpdates('<%= name %>s', vm.<%= name %>s);
  };
  <%= classedName %>Ctrl
    .$inject = ['resolved<%= classedName %>', '$scope', '<%= classedName %>', '<%= classedName %>Socket'];

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);
}).call(this);
