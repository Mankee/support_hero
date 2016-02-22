'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EntryEditCtrl
 * @description
 * # EntryEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EntryEditCtrl', function (
      $scope,
      $routeParams,
      Entry,
      $location
  ) {
    $scope.enditEntry = true;
    $scope.entry = {};
    Entry.one($routeParams.id).get().then(function(entry) {
      $scope.entry = entry;
      $scope.saveEntry = function() {
        $scope.entry.save().then(function() {
          $location.path('/entry/' + $routeParams.id);
        });
      };
    });
  });
