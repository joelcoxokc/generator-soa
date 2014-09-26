'use strict';

describe('Controller: RoomCtrl', function () {

  // load the controller's module
  beforeEach(module('baseApp'));

  var RoomCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoomCtrl = $controller('RoomCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
