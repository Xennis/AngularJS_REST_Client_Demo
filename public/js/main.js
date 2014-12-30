(function(){
	var app = angular.module('exampleClient', ['exampleClient.controllers', 'exampleClient.directives', 'ngRoute']);
	
	app.config(['$routeProvider', function ( $routeProvider ) {
		$routeProvider
		.when('/:resource', {
			templateUrl: function(urlattr) {
				return 'templates/' + urlattr.resource + '/show.html';
			},
			controller: 'ShowController'
		})
		.when('/:resource/:id', {
			templateUrl: function(urlattr) {
				return 'templates/' + urlattr.resource + '/edit.html';
			},	
			controller: 'EditController'			
		})
		.otherwise({
			redirectTo: '/facilities'}
		);
	}]);

})();
