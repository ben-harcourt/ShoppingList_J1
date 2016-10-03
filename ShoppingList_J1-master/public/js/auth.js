(function(){

	angular.module('MyApp').authentication('AppAuthentication', AppAuthentication);

	AppAuthentication.inject=['$http', 'API_BASE'];
	function appAuth($http, API_BASE){
		$http.get()
	}

S
})();