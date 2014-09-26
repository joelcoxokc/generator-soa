'use strict';
describe('Model: Tool', function () {

  // load the service's module
  beforeEach(module('baseApp'));

  // instantiate service
  var Tool;
  beforeEach(inject(function (_Tool_) {
    Tool = _Tool_;
  }));

  it('should do something', function () {
    expect(!!Tool).toBe(true);
  });

});