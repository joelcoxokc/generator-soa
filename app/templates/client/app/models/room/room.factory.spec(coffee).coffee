'use strict'
describe('Model: Room', ()->

  # load the service's module
  beforeEach(module('<%= scriptAppName %>'))

  Room

  # instantiate service
  beforeEach( inject( (_Room_)->
    Room = _Room_
  ));

  it('should do something', ()->
    expect(!!Room).toBe(true)
  )

)