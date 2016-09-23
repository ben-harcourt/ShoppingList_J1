(function () {
    'use strict';
 
    var app = angular.module('myApp');

	// Add Lists Controller
	app.controller('AddListController', ['$scope', '$http', '$location', 'API_BASE', function($scope, $http, $location, API_BASE){
		
		// RANDOM ID
		function makeid()
		{
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			for( var i=0; i < 20; i++ ){
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}

			text += Date.now();

			return text;
		}

		// ADD NEW LIST
		$scope.addList = function(newList){
				var list = {};
				var created = new Date();
				var newID = makeid();
				
				
				list = {
					id: newID,
					name: newList.name,
					color: '#' + newList.color,
					created: created,
				};
				console.log(list);
				
				$http.post(API_BASE + 'shopping-lists', list)
					.success(function (data, status, headers, config) {
						console.log('you added a new list named ' + list.name);
	            })
	            .error(function (data, status, header, config) {
	            });

				$location.path('/home');
		};

	}]);
 
}());