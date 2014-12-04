var appDirectives = angular.module('appDirectives', []);

appDirectives.directive('cardBox', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      story: '=',
      trash: '&'
    },
    templateUrl: '/card.html',
    controller: function($scope, $element) {

      $scope.card = {};
      $scope.titleEdit = false;
      $scope.contentEdit = false;

      $scope.editTitle = function() {
        $scope.titleEdit = true;
        $scope.card.title = $scope.story.title;
      }

      $scope.saveTitle = function() {
        $scope.titleEdit = false;
        $scope.story.title =  $scope.card.title;
      }

      $scope.cancelTitle = function() {
        $scope.titleEdit = false;
      }

      $scope.editContent = function() {
        $scope.contentEdit = true;
        $scope.card.content = $scope.story.content;
      }

      $scope.saveContent = function() {
        $scope.contentEdit = false;
        $scope.story.content =  $scope.card.content;
      }

      $scope.cancelContent = function() {
        $scope.contentEdit = false;
      }

      $scope.changeColor = function(color) {
        $scope.story.color = color;
      }

      $scope.trashStory = function(story) {
        $scope.story.status = 'deleted';
        $scope.trash()(story);
      }
    },
    link: function(scope, element, attr, controller) {
      // Handle clearing the board by manually deleting the card directive
      // Find a better way to implement this next century
      scope.$watch('story.status', function(val) {
        if(val == 'deleted') {
          $(element).alert('close');
        }
      });
    } 
  };
});

appDirectives.directive('deletedCardBox', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      story: '=',
      remove: '&'
    },
    templateUrl: '/deleted_card.html',
    controller: function($scope, $element) {

      $scope.removeStory = function(story) {
        $scope.remove()(story);
      }

    } 
  };
});
