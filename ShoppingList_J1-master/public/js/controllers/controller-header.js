(function () {
    'use strict';
 
    var app = angular.module('myApp');

	app.controller('headerController', ['$scope', '$http', 'API_BASE', function($scope, $http, API_BASE){

		// GET ALL LISTS
		$scope.lists = [];

		$http({
	  		method: 'GET',
	  		url: API_BASE + 'shopping-lists'
		}).then(function successCallback(response) {
			$scope.lists = response.data;
	  	}, function errorCallback(response) {
			console.log(response.statusText);
	  	});

	}]);
 
}());