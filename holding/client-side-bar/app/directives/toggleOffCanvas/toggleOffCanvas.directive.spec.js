'use strict';

describe('Directive: toggleOffCanvas', function () {

  // load the directive's module and view
  beforeEach(module('testerApp'));
  beforeEach(module('app/directives/toggleOffCanvas/toggleOffCanvas.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<toggle-off-canvas></toggle-off-canvas>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the toggleOffCanvas directive');
  }));
});