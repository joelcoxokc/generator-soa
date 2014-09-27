'use strict'

describe('Directive: whatsDifferent', ()->

  # load the directive's module and view
  beforeEach(module('<%= scriptAppName %>'))
  beforeEach(module('app/directives/whatsDifferent/whatsDifferent.html'))

  scope

  beforeEach( inject( ($rootScope)->
    scope = $rootScope.$new()
  ))

  it('should make hidden element visible', inject( ($compile)->
    element = angular.element('<whats-different></whats-different>')
    element = $compile(element)(scope)
    scope.$apply()
    expect(element.text()).toBe('this is the whatsDifferent directive')
  ))
)