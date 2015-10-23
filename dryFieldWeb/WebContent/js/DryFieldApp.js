var app = angular.module('dryFieldApp', [ 'ngRoute','ui.bootstrap']);
/**
 * Configuration des services $routeProvider et $locationProvider
 */
app.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider
			  .when('/dryFieldWeb', {
				templateUrl : '/dryFieldWeb/html/game.html',
				//controller : 'gameController'
			}).when('/dryFieldWeb/score', {
				templateUrl : '/dryFieldWeb/html/score.html',
				controller : 'scoreController'
			}).when('/dryFieldWeb/help', {
				templateUrl : '/dryFieldWeb/html/help.html',
				//controller : 'helpController'
			}).otherwise({
				redirectTo : '/dryFieldWeb'
			});

			$locationProvider.html5Mode({
     			enabled : true,
 				requireBase : false});
		} ]);