'use strict';

describe('Controller: UserViewEntriesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserViewEntriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserViewEntriesCtrl = $controller('UserViewEntriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserViewEntriesCtrl.awesomeThings.length).toBe(3);
  });
});
