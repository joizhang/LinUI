'use strict';

/* App Module */

var phonecatApp = angular.module('linuiApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'partials/index.html'
      }).
      when('/topic', {
        templateUrl: 'partials/topic.html'
      }).
      when('/blog', {
        templateUrl: 'partials/blog.html'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);
