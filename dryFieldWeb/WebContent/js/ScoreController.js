app.controller('scoreController', function($scope, $rootScope,$http) {
	$http.get('webapi/player').success(function(response){
		$scope.scoreList = response;
	})
});