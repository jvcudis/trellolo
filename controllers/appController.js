var appControllers = angular.module('appControllers', []);

appControllers.controller('BoardCtrl', ['$scope', 'stories',
	function($scope, stories) {

		$scope.stories = stories.stories;

		$scope.addBacklogStory = function() {
			// TODO: 
			// > add validation
			// > server sync 
			$scope.stories.push({
				title: 'Story 1',
				content: 'This is a sample story description.',
				color: 'white',
				status: 'backlog'
			});
		}

		$scope.addInProgressStory = function() {
			// TODO: 
			// > add validation
			// > server sync
			$scope.stories.push({
				title: 'Story 1',
				content: 'This is a sample story description.',
				color: 'white',
				status: 'in_progress'
			});
		}

		$scope.addDoneStory = function() {
			// TODO: 
			// > add validation
			// > server sync
			$scope.stories.push({
				title: 'Story 1',
				content: 'This is a sample story description.',
				color: 'white',
				status: 'done'
			});
		}

		$scope.removeStory = function(story) {
			// TODO: 
			// > add validation
			// > server sync
			var idx = $scope.stories.indexOf(story);
			$scope.stories.splice(idx, 1);
      	};

	}
]);

appControllers.controller('StoryCtrl', ['$scope', 'stories',
	function($scope, stories) {
		//TODO	
	}
]);

appControllers.controller('NavCtrl', ['$scope',
	function($scope) {
		//TODO
	}
]);

appControllers.controller('SortableCtrl', ['$scope',
	function($scope) {
		//TODO
	}
]);