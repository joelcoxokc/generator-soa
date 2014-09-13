'use strict'

angular
  .module '<%= scriptAppName %>'
  .service '<%= cameledName %>', ->
    this.count = 0;
    this.increment = =>
      this.count++
    this.decrement = =>
      this.count--
  # AngularJS will instantiate a singleton by calling 'new' on this function