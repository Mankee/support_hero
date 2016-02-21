'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, Entry) {
    $scope.entries = Entry.getList().$object;
    $scope.todaysDate = new Date().toDateString();

    $scope.isHeroOfTheDay = function (todaysDate, entries) {
      console.log(entries);
      var entryDates = entries.map(function (entry) {
        return new Date(entry.date).toDateString();
      });
      return entryDates.includes(todaysDate);
    };

    $scope.heroOfTheDay = function (todaysDate, entries) {
      var todaysHeros = [];
      entries.forEach(function (entry) {
        var parsedEntryDate = new Date(entry.date).toDateString();
        if (parsedEntryDate == todaysDate && entry.date.length > 0) {
          todaysHeros.push(entry.name);
        }
      });
      if (todaysHeros.length > 0) {
        return todaysHeros[0];
      } else {
        return "Anonymous"
      }
    };
  });
