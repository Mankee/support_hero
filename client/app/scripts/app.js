'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/create/entry', {
        templateUrl: 'views/entry-add.html',
        controller: 'EntryAddCtrl',
        controllerAs: 'entryAdd'
      })
      .when('/entry/:id', {
        templateUrl: 'views/entry-view.html',
        controller: 'EntryViewCtrl',
        controllerAs: 'entryView'
      })
      .when('/entry/:id/delete', {
        templateUrl: 'views/entry-delete.html',
        controller: 'EntryDeleteCtrl',
        controllerAs: 'entryDelete'
      })
      .when('/entry/:id/edit', {
        templateUrl: 'views/entry-edit.html',
        controller: 'EntryEditCtrl',
        controllerAs: 'entryEdit'
      })
      .when('/create/user', {
        templateUrl: 'views/user-add.html',
        controller: 'UserAddCtrl',
        controllerAs: 'userAdd'
      })
      .otherwise({
        redirectTo: '/'
      });

    RestangularProvider.setBaseUrl('http://localhost:3000');
  })
  .factory('User', function(EntryRestangular) {
    // Maps entry object to REST service endpoint
    return EntryRestangular.service('user');
  })
  .factory('EntryRestangular', function(Restangular) {
    // Binds restangular id to __id coming from REST API.
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Entry', function(EntryRestangular) {
    // Maps entry object to REST service endpoint
    return EntryRestangular.service('entry');
  });
