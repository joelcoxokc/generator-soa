'use strict';
(function(){

  var BuildSocket = function(socketFactory) {

    this.register = register;
    this.syncUpdates = syncUpdates;
    this.unsyncUpdates = unsyncUpdates;
    ////////////////
    function register(socket, model){
      this.socket = socket;
      this.model = model;
    }

    function syncUpdates(modelName, array, cb){
      cb = cb || angular.noop;

        /**
         * Syncs item creation/updates on 'model:save'
         */
        this.socket.on(modelName + ':save', function (item) {
          var oldItem = _.find(array, {_id: item._id});
          var index = array.indexOf(oldItem);
          var event = 'created';

          // We have to use Restangular to make a call for the item, in order to add it to the Restangular Collection
          array
            .one(item._id)
            .get()
            .then(function (data){
              console.log(data)
              // replace oldItem if it exists
              // otherwise just add item to the collection
              if (oldItem) {
                array.splice(index, 1, data);
                event = 'updated';
              } else {
                array.push(data);
              }

              cb(event, data, array);
            });

        });

        /**
         * Syncs removed items on 'model:remove'
         */
        this.socket.on(modelName + ':remove', function (item) {
          var event = 'deleted';
          _.remove(array, {_id: item._id});
          cb(event, item, array);
        });
    }
    function unsyncUpdates(modelName){
      this.socket.removeAllListeners(modelName + ':save');
      this.socket.removeAllListeners(modelName + ':remove');
    }

  };
  BuildSocket
    .inject = ['socketFactory']
  angular
    .module('<%= scriptAppName %>')
    .service('BuildSocket', BuildSocket);

}).call(this);

