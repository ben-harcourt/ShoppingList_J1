(function () {
    'use strict';
 
    var app = angular.module('myApp');

	app.controller('ShoppingListController', ['$scope', '$http', '$routeParams', 'API_BASE', '$location', function($scope, $http, $routeParams, API_BASE, $location){


		// GET SPECIFIC LIST
		$scope.list = [];
		var id = $routeParams.id;
		
		$http({
			method: 'GET',
			url: API_BASE + 'shopping-lists/' + id
		}).then(function successCallback(response) {
			$scope.list = response.data[0];
		}, function errorCallback(response) {
			console.log('it did not work');
			console.log(response.statusText);
		});


		// REMOVE LIST
		$scope.removeList = function(){
			var id = $scope.list.id;
			console.log(id);
			$http.delete(API_BASE + 'shopping-lists/' + id)
				.success(function (data, status, headers, config) {
					console.log('you deleted :' + $scope.list);
	            })
	            .error(function (data, status, header, config) {
	            });
	        $location.path('/home');    
		};

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


		// ADD ITEM
		$scope.addItem = function(){
			var created = new Date();
			var newID = makeid();

			if($scope.list.hasOwnProperty('items') === false){
				$scope.list.items = [];
			}
			$scope.list.items.push({
				name : $scope.newItem.name,
				priority : $scope.newItem.priority,
				note: $scope.newItem.note,
				image: $scope.newItem.image,//{data: Buffer, contentType: file}, //onUploadSelect($files)
				isChecked: false,
				listId: $scope.list.id,
				created: created,
				id: newID,
			});


			
			console.log($scope.list.items);
			$http.put(API_BASE + 'shopping-lists/', $scope.list)
				.success(function (data, status, headers, config) {
	            })
	            .error(function (data, status, header, config) {
	            });

	        // Reset input fields after submit
	        $scope.newItem = {
	        	name: "",
	        	priority: "",
	        	note: "",
	        	image:""
	        };    
		};


		// REMOVE ITEM
		$scope.removeItem = function(item){
			var removedItem = $scope.list.items.indexOf(item);
			$scope.list.items.splice(removedItem, 1);

			$http.put(API_BASE + 'shopping-lists', $scope.list)
				.success(function (data, status, headers, config) {
	            })
	            .error(function (data, status, header, config) {
	            });
		};


		// CLEAR ITEMS
		$scope.clearItems = function(){
			$scope.list.items.length = 0;

			$http.put(API_BASE + 'shopping-lists', $scope.list)
				.success(function (data, status, headers, config) {
	            })
	            .error(function (data, status, header, config) {
	            });
		};


		// CLEAR CHECKED ITEMS
		$scope.clearCheckedItems = function(){
			var length = $scope.list.items.length-1;

			for (var i = length; i > -1; i--) {
				if ($scope.list.items[i].isChecked === true) {
						$scope.list.items.splice(i,1);
				}
			}

			$http.put(API_BASE + 'shopping-lists', $scope.list)
				.success(function (data, status, headers, config) {
	            })
	            .error(function (data, status, header, config) {
	            });
		};

		//Edit Items / Checked Items
		$scope.editItem = function(){

			$http.put(API_BASE + 'shopping-lists', $scope.list)
				.success(function (data, status, headers, config) {
	            })
	            .error(function (data, status, header, config) {
	            });
		};
		
		// SORT ITEMS
		$scope.sortBy = function(propertyName) {
	    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
	    $scope.propertyName = propertyName;
		};

	}]);

	// //Store image to Database
	// var server = app;
	// var mongoose=require('mongoose');
	// var imgPath=('../../mongoUtil.js');
	// var A = mongoose.model('A', schema);

	// mongoose.connection.on('open',function(){
	// 	console.error('mongo is open');

	// 	A.remove(function(err){
	// 		if(err) throw err;
	// 		console.error('removed old docs');

	// 		var a = new A;
	// 		a.img.data=fs.readFileSync(imgPath);
	// 		a.img.contentType='image/png||image/jpg';
	// 		a.save(function(err,a){
	// 			if (err) throw err;

	// 			console.error('save img to mongo');

	// 			var server = express.createServer();
	// 			server.get('/', function(req, res, next){
	// 				A.findById(a, function (err, doc){
	// 					if(err) return next(err);
	// 					res.contentType(doc.img.contentType);
	// 					res.send(doc.img.data);
	// 				});
	// 			});

	// 			server.on('close', function(){
	// 				console.error('dropping db');
	// 				mongoose.connection.db.dropDatabase(function(){
	// 					console.error('closing db connection');
	// 					mongoose.connection.close();
	// 				});
	// 			});

	// 			server.listen(5000, function(err){
	// 				var address=server.address();
	// 			});

	// 			process.on('SIGINT', function(){
	// 				server.close();
	// 			});

	// 		});
	// 	});
	//});

}());