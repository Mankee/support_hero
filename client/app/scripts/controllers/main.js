'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, User, Entry) {
    $scope.entries = Entry.getList().$object;
    $scope.users = User.getList().$object;

    $scope.todaysDate = new Date().toDateString();

    $scope.isHeroOfTheDay = function (todaysDate, entries) {
      var entryDates = entries.map(function (entry) {
        return new Date(entry.date).toDateString();
      });
      return entryDates.includes(todaysDate);
    };

    $scope.heroOfTheDay = function (todaysDate, entries, users, getUserName) {
      var todaysHeros = [];
      entries.forEach(function (entry) {
        var parsedEntryDate = new Date(entry.date).toDateString();
        if (parsedEntryDate === todaysDate && entry.date.length > 0) {
          todaysHeros.push(entry.user);
        }
      });
      if (todaysHeros.length > 0) {
        return getUserName(users, todaysHeros[0]);
      } else {
        return 'Anonymous';
      }
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
