app.controller('MainController', function ($scope, FlashCardsFactory) {
	FlashCardsFactory.getFlashCards().then(function(cards){
		$scope.flashCards = cards
	})

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
		if(answer.correct){
			ScoreFactory.correct++;
		}
		if(!answer.correct){
			ScoreFactory.incorrect++;
		}
	}

	$scope.getCategoryCards = function(category) {
		
		FlashCardsFactory.getFlashCards(category).then(function(cards) {
			$scope.flashCards = cards
			$scope.category = category
		})
	}

	$scope.resetCategory = function() {
		FlashCardsFactory.getFlashCards().then(function(cards) {
			$scope.flashCards = cards
		})
	}

});