app.controller('gameOverModalCtrl', function($scope, $rootScope, $modalInstance, $http, $location,items) {

  $scope.saveResult = function () {
	  if($scope.name){
		  var player = {
				  playerName : $scope.name,
				  playerScore : $rootScope.harvestNumber,
		  }
		 $http.post('dryFieldWeb/webapi/player', player).success(function(){
			 console.log('Post ok');
		})
	    $modalInstance.dismiss('cancel');
		$location.path('/dryFieldWeb/score'); 
	  }
	
  };

  $scope.closeModal = function () {
    $modalInstance.dismiss('cancel');
  };
 
});