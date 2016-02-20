'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EntryDeleteCtrl
 * @description
 * # EntryDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EntryDeleteCtrl', function (
      $scope,
      $routeParams,
      Entry,
      $location
  ) {
    $scope.entry = Entry.one($routeParams.id).get().$object;
    $scope.deleteEntry = function() {
      $scope.entry.remove().then(function() {
        $location.path('/entry');
      });
    };
    $scope.back = function() {
      $location.path('/entry/' + $routeParams.id);
    };
  });
