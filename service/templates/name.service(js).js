'use strict';
(function(){

  angular
    .module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= cameledName %>);


  // <%= cameledName %>
  //   .$inject = ['']
  function <%= cameledName %>(){
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.value = 0;
    this.prototype.getValue = function(){
      return this.value;
    }
    this.prototype.increment = function(){
      return this.value++
    }
    this.prototype.decrement = function(){
      return this.value--
    }
  }

}).call(this)
