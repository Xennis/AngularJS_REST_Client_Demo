(function(){
	
	angular.module('exampleClient.directives', [])

	.directive('inputField', function() {
		return {
			restrict: 'E',
			transclude: false,
			template: '<div class="form-group">' +
					        ' <label>{{label}}</label>' +
					        ' <input type="{{type}}" ng-model="model" class="form-control" placeholder="{{label}}">' +
					   '</div>',
			scope : {
				model: '=',
				type: '@',
				label: '@'
			}
		};
	})
	
	.directive('addButton', function() {
		return {
			restrict: 'E',
			template: '<a href="{{href}}"><button type="button" class="btn btn-primary">{{text}}</button></a>',
			scope: {
				href: '@',
				text: '@'
			}
		};
	})
	
	.directive('editButton', function() {
		return {
			restrict: 'E',
			template: '<a href="{{href}}"><button type="button" class="btn btn-success">Edit</button></a>',
			scope: {
				href: '@'
			}
		};
	})

	.directive('submitButton', function() {
		return {
			restrict: 'E',
			template: '<button type="submit" class="btn btn-primary">Save</button>'
		};
	});
})();