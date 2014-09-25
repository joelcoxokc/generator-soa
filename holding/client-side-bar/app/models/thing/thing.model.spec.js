
'use strict';
describe('Model: Thing', function () {

  // load the service's module
  beforeEach(module('testerApp'));

  // instantiate service
  var Thing;
  beforeEach(inject(function (_Thing_) {
    Thing = _Thing_;
  }));

  it('should do something', function () {
    expect(!!Thing).toBe(true);
  });

});