app.controller('headerCtrl', function($scope, $rootScope, $modal, $location) {
    $scope.playGame = function(){
    	console.log(window.location.pathname);
    	if(window.location.pathname!='/dryFieldWeb'){
    		$location.path('/dryFieldWeb/game');
    	}else{
        	$rootScope.gameBreak = !$rootScope.gameBreak;
    	}
    
    };
    $scope.showScore = function(){	
    	$location.path('/dryFieldWeb/score');
    };
    $scope.showHelp = function(){
    	$location.path('/dryFieldWeb/help');
    };
});