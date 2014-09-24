# global io

'use strict'

angular.module '<%= scriptAppName %>'
.factory 'socket', (socketFactory, serverBaseUrl) ->

  # socket.io now auto-configures its connection when we omit a connection url
  ioSocket = io serverBaseUrl,
    # Send auth token on connection, you will need to DI the Auth service above
    # 'query': 'token=' + Auth.getToken()
    path: '/socket.io-client'

  socket = socketFactory ioSocket: ioSocket

  socket: socket

  ###
  Register listeners to sync an array with updates on a model

  Takes the array we want to sync, the model name that socket updates are sent from,
  and an optional callback function after new items are updated.

  @param {String} modelName
  @param {Array} array
  @param {Function} callback
  ###
  syncUpdates: (modelName, collection, callback) ->

    ###
    Syncs item creation/updates on 'model:save'
    ###
    socket.on modelName + ':save', (item) ->
      index = _.findIndex collection, {_id: item._id}
      oldItem = collection[index] or null
      event = 'created'


      # replace oldItem if it exists
      # otherwise just add item to the collection
      if oldItem
        collection.splice(index, 1, item)
        event = 'updated'
      else
        scope = collection.push item
        # readyScope = collection.call('push', item);
        return callback(event, item, scope)


      callback(event, item, collection)

    ###
    Syncs removed items on 'model:remove'
    ###
    socket.on modelName + ':remove', (item) ->
      event = 'deleted'
      _.remove collection,
        _id: item._id

      callback? event, item, collection

  ###
  Removes listeners for a models updates on the socket

  @param modelName
  ###
  unsyncUpdates: (modelName) ->
    socket.removeAllListeners modelName + ':save'
    socket.removeAllListeners modelName + ':remove'
