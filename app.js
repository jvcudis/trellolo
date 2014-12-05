var anngularApp = angular.module('anngularApp', [
	'ngRoute',
	'appControllers',
	'appServices',
	'appDirectives',
	'ui.router',
	'ngStorage',
	'ui.bootstrap',
	'ui.sortable'
]);

anngularApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/board',
				templateUrl: '/board.html',
				controller: 'BoardCtrl'
			});

		$urlRouterProvider.otherwise('board');
	}
]);