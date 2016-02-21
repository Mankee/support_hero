'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserViewEntriesCtrl
 * @description
 * # UserViewEntriesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserViewEntriesCtrl', function ($scope, $routeParams, Entry, User) {
    $scope.entries = Entry.getList().$object;
    $scope.users = User.getList().$object;

    $scope.filteredEntries = function (entries) {
      return entries.filter(function (entry) {
        return entry.user === $routeParams.id;
      });
    };

    $scope.getUserName = function (users, userID) {
      if (users && users.length > 0 && userID) {
        var userName = '';
        users.forEach(function (user) {
          if (user._id === userID) {
            userName = user.name;
          }
        });
        return userName;
      }
    };
  });
