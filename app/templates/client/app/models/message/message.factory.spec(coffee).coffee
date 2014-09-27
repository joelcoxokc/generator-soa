'use strict'
describe('Model: Message', ()->

  # load the service's module
  beforeEach(module('<%= scriptAppName %>'))

  Message

  # instantiate service
  beforeEach( inject( (_Message_)->
    Message = _Message_
  ));

  it('should do something', ()->
    expect(!!Message).toBe(true)
  )

)