'use strict';
(function(){
  angular
    .module('<%= scriptAppName %>')<% if(filters.server) { %>
    .factory('<%= classedName %>Provider', <%= classedName %>Provider)<% } %>
    .factory('<%= classedName %>', <%= classedName %>);
  <% if(filters.server) { %>
  <%= classedName %>
    .$inject = ['<%= classedName %>Provider'];
  <%= classedName %>Provider
    .$inject = ['Restangular'];<% } %>
  <% if(!filters.server) { %>
  <%= classedName %>
    .$inject = ['Restangular'];<% } %>

  <% if(filters.server){ %>
  function <%= classedName %>Provider(<% if(filters.restangular){ %>Restangular<% } else { %>$http<% } %>){
      return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://localhost:<%= filters.serverPort %>/api');
      });
   };
   <% } %>
  function <%= classedName %>(<% if(filters.server){ %><%= cameledName %>Provider<% } %><% if(!filters.server){ %>Restangular<% } %>) {
    <% if(filters.server){ %>
      return <%= cameledName %>Provider.service('<%= route %>');<% } %>
    <% if(!filters.server) { %>
      return Restangular.service('<%= route %>');<% } %>
  };

}).call(this);
