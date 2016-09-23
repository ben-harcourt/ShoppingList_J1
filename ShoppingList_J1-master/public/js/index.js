(function () {

	var app = angular.module('myApp', ['ngRoute']);

	// ROUTING
	app.config(['$routeProvider', function($routeProvider){

		$routeProvider
			.when('/home', {
				templateUrl: "views/home.html",
				controller: "HomeController"
			})
			.when('/shopping-list/:id', {
				templateUrl: "views/shopping-list.html",
				controller: 'ShoppingListController'
			})
			.when('/add-list', {
				templateUrl: "views/add-list.html",
				controller: 'AddListController'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}]);

	// app.constant('API_BASE', 'https://ryan-shopping-list.herokuapp.com/api/' || '//localhost:5000/api/');

	var host =	location.hostname === "localhost" ? 
			"//localhost:5000/api/" :
			"//ryan-shopping-list.herokuapp.com/api/";

	app.constant('API_BASE', host);

})();
