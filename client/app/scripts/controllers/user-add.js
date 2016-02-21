'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserAddCtrl
 * @description
 * # UserAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserAddCtrl', function ($scope, User, $location) {
    $scope.user = {};
    $scope.saveUser = function() {
      User.post($scope.user).then(function() {
        $location.path('/');
      });
    };
  });
