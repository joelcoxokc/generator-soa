'use strict';
(function(){
   var <%= cameledName %>Provider = function(Restangular){
      return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://localhost:');
      });
   };

   var <%= cameledName %> = function (<%= cameledName %>Provider) {
    var API = <%= cameledName %>Provider.all('<%= name %>');

    // <%= cameledName %> API here
    return {
      get: get
    };

    /////////////

    function get() {
      return API.getList();
    }
  };
  <%= cameledName %>
    .$inject = ['<%= cameledName %>Provider'];
  <%= cameledName %>Provider
    .$inject = ['Restangular'];
  angular.module('<%= scriptAppName %>')
    .factory('<%= cameledName %>Provider', <%= cameledName %>Provider)
    .factory('<%= cameledName %>', <%= cameledName %>);

}).call(this);
