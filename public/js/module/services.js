(function(){

	var API_URL = 'http://localhost:3000/';
	
	angular.module('exampleClient.services', ['ngResource'])
	
	.factory('Facility', function($resource) {
		return $resource(API_URL + 'facilities/:id', null,
			{
				update: { method: 'PUT' }
			}
		);
	})
	
	.factory('Person', function($resource) {
		return $resource(API_URL + 'people/:id', null,
			{
				update: { method: 'PUT' }
			}
		);
	})
	
	.factory('ResourceHelper', function(Facility, Person) {
		return {
			/**
			 * Returns the corresponding ressource
			 * 
			 * @param {string} resourceAsString The ressource as string
			 * @returns {Object.Facility|Object.Person} Ressource object
			 */
			getResource: function(resourceAsString) {
				if (resourceAsString === 'facilities') {
					return Facility;
				}
				else if (resourceAsString === 'people') {
					return Person;
				}
			}
		};
	});

})();


