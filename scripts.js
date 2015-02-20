var wedApp = angular.module('wedApp', ['ngRoute']);

wedApp.controller('MainCtrl' ,function($scope) {
	$scope.message = 'yet';
	}); 

wedApp.config(['$routeProvider',
				function($routeProvider) {
					$routeProvider.when('/juhlat', {
						templateUrl: 'partials/juhlat.html',
						controller: 'mainCtrl'
					}).when('/info', {
						templateUrl: 'partials/info.html',
						controller: 'mainCtrl'
					}).otherwise({
						templateUrl: 'partials/main.html',
						controller: 'mainCtrl'
					})}]);

