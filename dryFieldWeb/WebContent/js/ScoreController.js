app.controller('scoreController', function($scope, $rootScope,$http) {
	$http.get('webapi/player').success(function(response){
		$scope.scoreList = response;
		$scope.currentPage = 0;
		$scope.pageSize = 5;
		$scope.data = [];
		$scope.numberOfPages=function(){
		  return Math.ceil($scope.scoreList.length/$scope.pageSize);                
		}
	})
});
