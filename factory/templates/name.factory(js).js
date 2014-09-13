'use strict';
(function(){

  angular
    .module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', <%= cameledName %>);
    // <%= cameledName %>
    //   .$inject = []
    function <%= cameledName %>() {

      var _storage = {};
      var _size = 0;

      return {
        push: push,
        pop: pop,
        size: size
      }

      ///////////////

      function push(value){
        _storage[_size] = value;
        _size++
      }
      function pop(){
        if(_size > 0) _size--;
        var result = _storage[_size];
        delete _storage[_size];
        return result;
      }
      function size(){
        return _size;
      }

    }
}).call(this);