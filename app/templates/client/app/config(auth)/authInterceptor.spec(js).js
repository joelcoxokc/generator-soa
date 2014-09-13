'use strict';

describe('Service: people', function () {

  // load the service's module
  beforeEach(module('<%= scriptAppName %>'));

  // instantiate service
  var authInterceptor;
  beforeEach(inject(function (_authInterceptor_) {
    authInterceptor = _authInterceptor_;
  }));

  it('should do something', function () {
    expect(!!authInterceptor).toBe(true);
  });

});
