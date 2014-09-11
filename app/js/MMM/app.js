'use strict'

require('angular/angular');
require('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);

require('./controllers/mmmcontroller')(mmmApp);

mmmApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/mmm', {
      templateUrl: 'views/MMM/mmm.html',
      controller: 'mmmController'
    })
    .otherwise({
      redirectTo: '/mmm'
    });
}]);
