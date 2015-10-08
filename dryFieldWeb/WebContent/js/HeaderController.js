app.controller('headerCtrl', function($scope, $rootScope, $modal) {
    $scope.playGame = function(){
    	$rootScope.gameBreak = !$rootScope.gameBreak;
    };
    
 
});