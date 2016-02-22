"use strict";angular.module("clientApp",["ngRoute","restangular","ui.bootstrap"]).config(["$routeProvider","RestangularProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/create/entry",{templateUrl:"views/entry-add.html",controller:"EntryAddCtrl",controllerAs:"entryAdd"}).when("/entry/:id",{templateUrl:"views/entry-view.html",controller:"EntryViewCtrl",controllerAs:"entryView"}).when("/entry/:id/delete",{templateUrl:"views/entry-delete.html",controller:"EntryDeleteCtrl",controllerAs:"entryDelete"}).when("/entry/:id/edit",{templateUrl:"views/entry-edit.html",controller:"EntryEditCtrl",controllerAs:"entryEdit"}).when("/create/user",{templateUrl:"views/user-add.html",controller:"UserAddCtrl",controllerAs:"userAdd"}).when("/user/:id/entries",{templateUrl:"views/user-view-entries.html",controller:"UserViewEntriesCtrl",controllerAs:"userViewEntries"}).otherwise({redirectTo:"/"}),"localhost"===window.location.hostname?b.setBaseUrl("http://localhost:3000"):b.setBaseUrl(window.location.href.substring(0,window.location.href))}]).factory("User",["EntryRestangular",function(a){return a.service("user")}]).factory("EntryRestangular",["Restangular",function(a){return a.withConfig(function(a){a.setRestangularFields({id:"_id"})})}]).factory("Entry",["EntryRestangular",function(a){return a.service("entry")}]),angular.module("clientApp").controller("datepickerCtrl",["$scope",function(a){a.today=function(){a.dt=new Date},a.today(),a.clear=function(){a.dt=null};var b=["Tue Feb 23 2016","Thu Mar 31 2016","Sun May 08 2016","Mon May 30 2016","Sun Jun 19 2016","Mon Jul 04 2016","Mon Sep 05 2016","Fri Nov 11 2016","Thu Nov 24 2016","Fri Nov 25 2016","Mon Dec 26 2016"];a.disabled=function(a,c){return"day"===c&&(0===a.getDay()||6===a.getDay()||b.includes(a.toDateString()))},a.toggleMin=function(){a.minDate=a.minDate?null:new Date},a.toggleMin(),a.maxDate=new Date(2020,5,22),a.open1=function(){a.popup1.opened=!0},a.open2=function(){a.popup2.opened=!0},a.setDate=function(b,c,d){a.dt=new Date(b,c,d)},a.dateOptions={formatYear:"yy",startingDay:1},a.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],a.format=a.formats[0],a.altInputFormats=["M!/d!/yyyy"],a.popup1={opened:!1},a.popup2={opened:!1};var c=new Date;c.setDate(c.getDate()+1);var d=new Date;d.setDate(c.getDate()+1),a.events=[{date:c,status:"full"},{date:d,status:"partially"}],a.getDayClass=function(b,c){if("day"===c)for(var d=new Date(b).setHours(0,0,0,0),e=0;e<a.events.length;e++){var f=new Date(a.events[e].date).setHours(0,0,0,0);if(d===f)return a.events[e].status}return""}}]),angular.module("clientApp").controller("MainCtrl",["$scope","User","Entry",function(a,b,c){a.entries=c.getList().$object,a.users=b.getList().$object,a.todaysDate=(new Date).toDateString(),a.isHeroOfTheDay=function(a,b){var c=b.map(function(a){return new Date(a.date).toDateString()});return c.includes(a)},a.heroOfTheDay=function(a,b,c,d){var e=[];return b.forEach(function(b){var c=new Date(b.date).toDateString();c===a&&b.date.length>0&&e.push(b.user)}),e.length>0?d(c,e[0]):"Anonymous"},a.getUserName=function(a,b){if(a&&a.length>0&&b){var c="";return a.forEach(function(a){a._id===b&&(c=a.name)}),c}}}]),angular.module("clientApp").controller("EntryAddCtrl",["$scope","User","Entry","$location",function(a,b,c,d){a.users=b.getList().$object,a.entry={},a.saveEntry=function(){c.post(a.entry).then(function(){d.path("/")})}}]),angular.module("clientApp").controller("EntryViewCtrl",["$scope","$routeParams","Entry",function(a,b,c){a.viewEntry=!0,a.entry=c.one(b.id).get().$object}]),angular.module("clientApp").controller("EntryDeleteCtrl",["$scope","$routeParams","Entry","$location",function(a,b,c,d){a.entry=c.one(b.id).get().$object,a.deleteEntry=function(){a.entry.remove().then(function(){d.path("/entry")})},a.back=function(){d.path("/"+b.id)}}]),angular.module("clientApp").controller("EntryEditCtrl",["$scope","$routeParams","Entry","$location",function(a,b,c,d){a.enditEntry=!0,a.entry={},c.one(b.id).get().then(function(c){a.entry=c,a.saveEntry=function(){a.entry.save().then(function(){d.path("/entry/"+b.id)})}})}]),angular.module("clientApp").controller("UserAddCtrl",["$scope","User","$location",function(a,b,c){a.user={},a.saveUser=function(){b.post(a.user).then(function(){c.path("/")})}}]),angular.module("clientApp").controller("UserViewEntriesCtrl",["$scope","$routeParams","Entry","User",function(a,b,c,d){a.entries=c.getList().$object,a.users=d.getList().$object,a.filteredEntries=function(a){return a.filter(function(a){return a.user===b.id})},a.getUserName=function(a,b){if(a&&a.length>0&&b){var c="";return a.forEach(function(a){a._id===b&&(c=a.name)}),c}}}]),angular.module("clientApp").run(["$templateCache",function(a){a.put("views/entry-add.html",'<form class="form-horizontal" role="form"> <div class="form-group"> <label for="user" class="col-sm-1 control-label">Name</label> <div class="col-sm-4"> <select class="form-control" name="userSelect" id="user" ng-model="entry.user" ng-options="user._id as user.name for user in users "></select> </div> </div> <div class="form-group"> <label for="date" class="col-sm-1 control-label">Date</label> <div class="col-sm-10"> <div ng-controller="datepickerCtrl"> <uib-datepicker id="date" ng-model="entry.date" min-date="minDate" show-weeks="true" class="well well-sm" custom-class="getDayClass(date, mode)" ng-required="true" style="display: inline-block" date-disabled="disabled(date, mode)"> </uib-datepicker> </div> </div> </div> <div class="form-group"> <div class="col-sm-2"> <input type="submit" class="form-control btn btn-primary" ng-click="saveEntry()" value="Save"> </div> </div> </form>'),a.put("views/entry-delete.html",'<form role="form"> <p>Are you sure you wish to delete the entry {{ entry.name }}?</p> <div class="form-group"> <input type="submit" class="btn btn-danger" ng-click="deleteEntry()" value="Yes"> <button ng-click="back()" type="button" class="btn btn-default">No</button> </div> </form>'),a.put("views/entry-edit.html","<ng-include src=\"'views/entry-add.html'\"></ng-include>"),a.put("views/entry-view.html","<h3>{{ entry.name }}</h3> <p>{{ entry.date }}</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1 ng-if="isHeroOfTheDay(todaysDate, entries)">Today\'s support hero is {{heroOfTheDay(todaysDate, entries, users, getUserName)}}.</h1> <h1 ng-if="!isHeroOfTheDay(todaysDate, entries)">No support hero scheduled for today.</h1> </div> <a class="btn btn-primary" href="/#/create/user"><span class="glyphicon glyphicon-plus"></span> Create User</a> <a class="btn btn-primary" href="/#/create/entry"><span class="glyphicon glyphicon-plus"></span> Create Entry</a> <br> <div> <table class="table table-striped"> <thead> <th>Name</th> <th>Date</th> <th>Operations</th> </thead> <tbody> <tr ng-repeat="entry in entries | orderBy : \'-date\' : \'reverse\'"> <td><a ng-href="/#/user/{{ entry.user }}/entries">{{ getUserName(users, entry.user) }}</a></td> <td>{{ entry.date | date:\'MM-dd-yyyy\' }}</td> <td> <div class="button-group"> <a ng-href="/#/entry/{{ entry._id }}/edit" class="btn btn-default"> <span class="glyphicon glyphicon-edit"></span> </a> <a ng-href="/#/entry/{{ entry._id }}/delete" class="btn btn-danger"> <span class="glyphicon glyphicon-remove-circle"></span> </a> </div> </td> </tr> </tbody> </table> </div>'),a.put("views/user-add.html",'<form role="form"> <div class="form-group"> <label for="name" class="control-label">Name</label> <input type="text" ng-model="user.name" class="form-control" id="name" placeholder="Enter the user\'s name"> </div> <input type="submit" class="btn btn-primary" ng-click="saveUser()" value="Save"> </form>'),a.put("views/user-view-entries.html","<div> <table class=\"table table-striped\"> <thead> <th>Name</th> <th>Date</th> </thead> <tbody> <tr ng-repeat=\"entry in filteredEntries(entries) | orderBy : '-date' : 'reverse'\"> <td>{{ getUserName(users, entry.user) }}</td> <td>{{ entry.date | date:'MM-dd-yyyy' }}</td> </tr> </tbody> </table> </div>")}]);