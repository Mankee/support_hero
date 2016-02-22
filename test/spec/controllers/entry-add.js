'use strict';

describe('Controller: EntryAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var EntryAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntryAddCtrl = $controller('EntryAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EntryAddCtrl.awesomeThings.length).toBe(3);
  });
});
