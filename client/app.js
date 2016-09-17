angular.module('app', ['ngRoute', 'ngMaterial', 'ngMessages'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/view1', {
				templateUrl: 'components/view1/view1.view.html',
				controller: 'view1Ctrl',
				controllerAs: 'vm'
			})
			.when('/view2', {
				templateUrl: 'components/view2/view2.view.html',
				controller: 'view2Ctrl',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/view1'});
		});