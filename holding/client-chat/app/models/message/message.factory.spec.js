'use strict';
describe('Model: Message', function () {

  // load the service's module
  beforeEach(module('baseApp'));

  // instantiate service
  var Message;
  beforeEach(inject(function (_Message_) {
    Message = _Message_;
  }));

  it('should do something', function () {
    expect(!!Message).toBe(true);
  });

});