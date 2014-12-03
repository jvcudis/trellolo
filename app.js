var anngularApp = angular.module('anngularApp', [
	'ngRoute',
	'appControllers',
	'appServices',
	'appDirectives',
	'ui.router',
	'ngStorage',
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
			})
			.state('stories', {
				url: '/stories/{id}',
				templateUrl: '/stories.html',
				controller: 'StoryController'
			});

		$urlRouterProvider.otherwise('board');
	}
]);