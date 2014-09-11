'use strict';
(function(){
  <% if(filters.server){ %>
   var <%= cameledName %>Provider = function(Restangular){
      return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://localhost:<%= filters.serverPort %>/api');
      });
   };
   <% } %>
   var <%= cameledName %> = function (<% if(filters.server){ %><%= cameledName %>Provider<% } %><% if(!filters.server){ %>Restangular<% } %>) {
    <% if(filters.server){ %>
      var API = <%= cameledName %>Provider.all('<%= name %>');
    <% } else { %>
      var API = Restangular.all('<%= name %>');
    <% } %>
    // <%= cameledName %> API here
    return {
      get: get
    };

    /////////////

    function get() {
      return API.getList();
    }
  };
  <% if(filters.server) { %>
  <%= cameledName %>
    .$inject = ['<%= cameledName %>Provider'];
  <%= cameledName %>Provider
    .$inject = ['Restangular'];<% } %>
  <% if(!filters.server) { %>
  <%= cameledName %>
    .$inject = ['Restangular'];<% } %>
  angular.module('<%= scriptAppName %>')
  <% if(filters.server) { %>
    .factory('<%= cameledName %>Provider', <%= cameledName %>Provider)<% } %>
    .factory('<%= cameledName %>', <%= cameledName %>);

}).call(this);
