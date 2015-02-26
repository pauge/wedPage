'use strict'

var App = angular.module('wedApp', ['ui.router']);


App.controller('MainCtrl' ,function($scope) {
});

App.controller('LoginCtrl', function($scope, $window, $location, $http) {
	$scope.notify = function(login) {
			var name = login.name;
			var pwd = login.pwd;
			var url = 'http://'+$location.host()+':3000';
			$http.get(url).
				success(function(data) {
						console.log('success')
				}).error(function(data) {
						console.log('fail')
				});
			$http.post(url, {'name':login.name,'pwd':login.pwd}).
				success(function(data) {
						console.log('success')
				}).error(function(data) {
						console.log('fail')
				});
			
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
