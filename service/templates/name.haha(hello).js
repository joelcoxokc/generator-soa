'use strict';
(function(){
  var <%= cameledName %> = function(){
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.value = null;
    this.prototype.getValue = function(){
      return this.value;
    }
  };

  // <%= cameledName %>
  //   .$inject = ['']
  angular
    .module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= cameledName %>);
}).call(this)
