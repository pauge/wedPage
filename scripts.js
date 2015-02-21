var wedApp = angular.module('wedApp', ['ngRoute']);

wedApp.controller('MainCtrl' ,function($scope) {
	$scope.message = 'yet';
});

wedApp.controller('LoginCtrl', function($scope, $window) {
	$scope.alert = function(login) {
			var name = login.name;
			var pwd = login.pwd;
			login.name = "";
			login.pwd = "";
			$window.alert('Kirjoitit '+name+' '+pwd);
}});

wedApp.config(['$routeProvider',
				function($routeProvider) {
					$routeProvider.when('/juhlat', {
						templateUrl: 'partials/juhlat.html',
						controller: 'MainCtrl'
					}).when('/info', {
						templateUrl: 'partials/info.html',
						controller: 'MainCtrl'
					}).otherwise({
						templateUrl: 'partials/main.html',
						controller: 'MainCtrl'
})}]);

