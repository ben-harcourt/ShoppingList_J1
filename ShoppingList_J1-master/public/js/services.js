(function(){

	angular.module('myApp')
		.service('AppService', AppService);

		AppService.$inject = [ '$http', 'API_BASE' ];
		function AppService($http, API_BASE) {
			// setting logsService = to 'this' allows us to use logsService instead of $scope
			var appService = this;
			appService.lists = [];

			appService.fetch = function(){
				return $http.get(API_BASE + 'shopping-lists')
					.then(function(response){
						appService.lists = response.data;
					});
				};

			/*
			appService.save = function(log) {
				return $http.post(API_BASE + 'log', {
					log: log
				}).then(function(response){
					logsService.workouts.push(response.data);
					console.log(log);
				});
			};

			logsService.delete = function(log) {
				return $http.delete(API_BASE + 'log', {
					log: log
				}).then(function(response){
					logsService.workouts.push(response.data);
					console.log(log);
				});
			};

			logsService.getLogs = function(){
				return logsService.workouts;
			};

			*/
		}	
})();