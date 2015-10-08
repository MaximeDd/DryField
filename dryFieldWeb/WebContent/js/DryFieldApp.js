var app = angular.module('dryFieldApp', [ 'ngRoute','ui.bootstrap']);
/**
 * Configuration des services $routeProvider et $locationProvider
 */
app.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider
				// Game
			  .when('/game', {
				templateUrl : '/html/game.html',
				//controller : 'loginControleur'
				// Score
			}).when('/score', {
				templateUrl : '/html/score.html',
				//controller : 'listerSallesControleur'
				// Help
			}).when('/help', {
				templateUrl : '/html/help.html',
				//controller : 'gererSalleControleur'
			}).otherwise({
				redirectTo : '/game'
			});

			$locationProvider.html5Mode(true);
		} ]);