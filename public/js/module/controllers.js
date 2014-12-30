(function(){
	
	angular.module('exampleClient.controllers', ['exampleClient.services', 'ngRoute'])

	.controller('HeaderController', function($scope, $location) { 
		$scope.isActive = function (viewLocation) {
			return viewLocation === $location.path().substring(0, viewLocation.length);
		};
	})

	.controller('ShowController', function($scope, $routeParams, ResourceHelper) {
		var Ressource = ResourceHelper.getResource($routeParams.resource);

		$scope.items = Ressource.query();
		
		/**
		 * Deletes a item
		 * @param {number} index
		 * @param {number} id
		 */
		$scope.delete = function(index, id) {
			Ressource.delete({id: id}, function() {
				$scope.items.splice(index, 1);
			});
		};
	})
	
	.controller('EditController', ['$scope', '$routeParams', 'ResourceHelper', function($scope, $routeParams, ResourceHelper) {
		var Ressource = ResourceHelper.getResource($routeParams.resource);

		if ($routeParams.id !== 'new') {
			$scope.item = Ressource.get({ id: $routeParams.id });
		} else {
			$scope.item = new Ressource();
		}

		/**
		 * Creates or updates an item
		 */
		$scope.post = function() {
			// Update
			if ($scope.item.id) {
				Ressource.update({ id: $scope.item.id }, $scope.item, function() {
					$scope.successMessage = 'Saved';
				}, function() {
					$scope.errorMessage = 'Error';
				});
			} 
			// Create
			else {
				Ressource.save($scope.item, function() {
					$scope.successMessage = 'Saved';
					$scope.item = new Ressource(); // Clear form
				}, function() {
					$scope.errorMessage = 'Error';
				});
			}
		};

	}]);

})();