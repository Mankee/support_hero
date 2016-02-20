'use strict';

describe('Controller: EntryViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var EntryViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntryViewCtrl = $controller('EntryViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EntryViewCtrl.awesomeThings.length).toBe(3);
  });
});
