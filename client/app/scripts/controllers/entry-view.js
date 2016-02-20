'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EntryViewCtrl
 * @description
 * # EntryViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EntryViewCtrl', function (
      $scope,
      $routeParams,
      Entry
  ) {
    $scope.viewEntry = true;
    $scope.entry = Entry.one($routeParams.id).get().$object;
  });
