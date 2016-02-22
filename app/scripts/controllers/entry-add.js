'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EntryAddCtrl
 * @description
 * # EntryAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EntryAddCtrl', function ($scope, User, Entry, $location) {
    $scope.users = User.getList().$object;

    $scope.entry = {};
    $scope.saveEntry = function() {
      Entry.post($scope.entry).then(function() {
        $location.path('/');
      });
    };
  });
