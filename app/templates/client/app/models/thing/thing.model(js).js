'use strict';
(function(){

   var Thing = function (Restangular) {
      var API = Restangular.all('things');

    return {
      all: all,
      find: find,
      create: create,
      update: update,
      destroy: destroy
    };

    /////////////

    function all() {
      return API.getList();
    }
    function find(id){
      return Restangular.one('things', id).get();
    }
    function create(data){
      return API.post(data)
    }
    function update(id, data){
      return Restangular.one('things', id).put(data);
    }
    function destroy(id){
      return Restangular.one('things', id).remove();
    }
  };


  Thing
    .$inject = ['Restangular'];
  angular.module('<%= scriptAppName %>')
    .factory('Thing', Thing);

}).call(this);
