'use strict'

var App = angular.module('wedApp', ['ui.router']);


App.controller('MainCtrl' ,function($scope) {
		console.log('moi');
	$scope.message = 'yet';
});

App.controller('LoginCtrl', function($scope, $window) {
	$scope.notify = function(login) {
			var name = login.name;
			var pwd = login.pwd;
			login.name = "";
			login.pwd = "";
			$window.alert('Kirjoitit '+name+' '+pwd);
}});

App.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('/main');
	$stateProvider
			.state('juhlat', {
				url: "/juhlat",
				templateUrl: '/views/partials/juhlat.html',
				controller: 'MainCtrl'})
			.state('info', {
				url: "/info",
				templateUrl: '/views/partials/info.html',
				controller: 'MainCtrl'
				})
			.state('main', {
				url: "/",
				templateUrl: '/views/partials/main.html',
				controller: 'MainCtrl'
				})
			.state('ilmo', {
				url: "/ilmo",
				templateUrl: '/views/partials/ilmo.html',
				controller: 'MainCtrl'
				})
});
