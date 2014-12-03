var appServices = angular.module('appServices', ['ngStorage']);

appServices.factory('stories', [
	function() {
		var s = {
			stories: [
				{
					title: 'Story 1',
					content: 'This is a sample story description.',
					color: 'white',
					status: 'backlog',
					rank: 1
				},
				{
					title: 'Story 2',
					content: 'This is a sample story description.',
					color: 'white',
					status: 'in_progress',
					rank: 2
				},
				{
					title: 'Story 1',
					content: 'This is a sample story description.',
					color: 'green',
					status: 'done',
					rank: 3
				}
			]
		};
		return s;
	}
]);