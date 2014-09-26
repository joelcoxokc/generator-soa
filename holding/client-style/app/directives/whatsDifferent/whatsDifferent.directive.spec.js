'use strict';

describe('Directive: whatsDifferent', function () {

  // load the directive's module and view
  beforeEach(module('testApp'));
  beforeEach(module('app/directives/whatsDifferent/whatsDifferent.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<whats-different></whats-different>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the whatsDifferent directive');
  }));
});