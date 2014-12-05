var appControllers = angular.module('appControllers', []);

appControllers.controller('BoardCtrl', ['$rootScope', '$scope', '$localStorage', 'stories',
	function($rootScope, $scope, $localStorage, stories) {

		stories.initialize();
		$scope.stories = $rootScope.$storage.stories;
		$scope.sortedStories = {};

		sortStories = function(boardName) {
			var _boardName = boardName || 'backlog';
			$scope.sortedStories[_boardName] = _.filter($scope.stories, function(obj) {
				return obj.status == _boardName;
			});
		}

		createOptions = function(boardName) {
  		var _boardName = boardName || 'backlog';
    	var options = {
      	placeholder: 'story',
      	connectWith: '.story-container',
      	items: $scope.sortedStories[_boardName],
      	update: function(event, ui) {
      		ui.item.sortable.model.status = _boardName;
				},
				stop: function(event, ui) {					
					ui.item.sortable.model.rank = ui.item.sortable.index - 1;
      		
      		// Update rank of other items
      		// I'm not liking this solution. TO BE IMPROVED next year
      		var _cnt = ui.item.sortable.model.rank;
      		while (_cnt < $scope.sortedStories[_boardName].length) {
      			var rankCnt = _cnt;
      			$scope.sortedStories[_boardName][_cnt++].rank = rankCnt;
      		}
				}
    	};
    	return options;
  	}

		$scope.addStory = function(status, rank) {
			var story = {
				title: 'Story #1',
				content: "I am so self explanatory that I don't need a description.",
				color: 'white'
			};

			story.rank = rank || 0;
			story.status = status || 'backlog';

			$scope.sortedStories[status].push(story);
			stories.add(story);
		}

		$scope.clearBoard = function(status) {
			if(status == undefined || status == null) {
				return;
			}

  		angular.forEach($scope.sortedStories[status], function(obj) {
  			$scope.trashStory(obj);
  		});
  	}

  	$scope.trashStory = function(story) {
			if(story == undefined || story == null) {
				return;
			}
	    
	    story.status = 'deleted';
	    $scope.sortedStories['deleted'].push(story);
    }

		$scope.removeStory = function(story) {
			if(story == undefined || story ==  null) {
				return;
			}
			$scope.sortedStories['deleted'].pop(story);
			stories.remove(story);
    };

    $scope.judiciousPurging = function() {
    	var deletedStories = $scope.sortedStories['deleted'];
    	$scope.sortedStories['deleted'] = [];
  		_.each(deletedStories, function(story) {
  			$scope.removeStory(story);
  		});
  	}

    // Next release
    $scope.restoreStory = function(story) {
    	//TODO
    }

    $scope.sortableStories = [createOptions('backlog'), createOptions('in_progress'), createOptions('done')];

  	sortStories('backlog');
  	sortStories('in_progress')
  	sortStories('done');
  	sortStories('deleted');
	}
]);