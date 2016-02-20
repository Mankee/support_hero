'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EntryAddCtrl
 * @description
 * # EntryAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EntryAddCtrl', function ($scope, Entry, $location) {
    $scope.entry = {};
    $scope.saveEntry = function() {
      Entry.post($scope.entry).then(function() {
        $location.path('/');
      });
    };
  });
