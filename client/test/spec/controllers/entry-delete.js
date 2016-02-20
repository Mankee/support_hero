'use strict';

describe('Controller: EntryDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var EntryDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntryDeleteCtrl = $controller('EntryDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EntryDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
