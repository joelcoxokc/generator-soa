;(function(){
'use strict';

  angular
    .module('<%= scriptAppName %>')
    .factory('<%= classedName %>', <%= classedName %>);
    /* @inject */
    function <%= classedName %>(Restangular) {
      return Restangular.service('<%= pluralName %>');
    }

}).call(this);
