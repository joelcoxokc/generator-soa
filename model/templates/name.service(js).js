'use strict';
(function(){
  <% if(filters.server && filters.restangular){ %>
   var <%= classedName %>Provider = function(<% if(filters.restangular){ %>Restangular<% } else { %>$http<% } %>){
      return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://localhost:<%= filters.serverPort %>/api');
      });
   };
   <% } %>
   var <%= classedName %> = function (<% if(filters.server){ %><%= cameledName %>Provider<% } %><% if(!filters.server){ %>Restangular<% } %>) {
    <% if(filters.server && filters.restangular){ %>
      return <%= cameledName %>Provider.service('<%= route %>');
    <% } else if(filters.restangular) { %>
      return Restangular.service('<%= route %>');
    <% } else { %>
      var serverUrl = 'http://localhost:<%= filters.serverPort %>/api/';
    // <%= cameledName %> API here

    return {
      all: all,
      find: find,
      create: create,
      update: update,
      destroy: destroy
    };

    /////////////

    function all() {
      return $http.get(serverUrl);
    }
    function find(id){
      return $http.get(serverUrl + id);
    }
    function create(data){
      return $http.post(serverUrl, data);
    }
    function update(id, data){
      return $http.put(serverUrl + id);
    }
    function destroy(id){
      return $http.delete(serverUrl + id);
    }

    <% } %>
  };
<% if(filters.restangular){ %>
  <% if(filters.server) { %>
  <%= classedName %>
    .$inject = ['<%= classedName %>Provider'];
  <%= classedName %>Provider
    .$inject = ['Restangular'];<% } %>
  <% if(!filters.server) { %>
  <%= classedName %>
    .$inject = ['Restangular'];<% } %>
<% } else { %>
  <%= classedName %>
    .$inject = ['$http'];<% } %>

  angular.module('<%= scriptAppName %>')
  <% if(filters.server && filters.restangular) { %>
    .factory('<%= classedName %>Provider', <%= classedName %>Provider)<% } %>
    .factory('<%= classedName %>', <%= classedName %>);

}).call(this);
