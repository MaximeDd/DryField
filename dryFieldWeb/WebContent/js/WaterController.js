app.controller('waterCtrl', function($scope, $rootScope) {
    
    $scope.waterPopInShow = false;
    $scope.buyWater = function(){
    	var moneyBag = [];
    	for(var i=0;i<=$scope.money;i++) {
  			moneyBag.push(i);
		}
    	$scope.moneyBag = moneyBag;
    	$scope.waterPopInShow = !$scope.waterPopInShow;
        if($rootScope.time != 0){
            $rootScope.gameBreak = !$rootScope.gameBreak;    
        }
    };

    $scope.closeWaterPopIn = function(){
    	$scope.waterPopInShow = !$scope.waterPopInShow;
    	$rootScope.gameBreak = false;
    };

    $scope.buyWaterPopIn = function(){
        var waterQuantity = parseInt($scope.selectWaterQuantity);
        if($rootScope.money>= waterQuantity){
            $rootScope.money -= waterQuantity;
            $rootScope.waterStock += waterQuantity;    
        }
    	$scope.waterPopInShow = !$scope.waterPopInShow;
    	$rootScope.gameBreak = false;
    };
});

