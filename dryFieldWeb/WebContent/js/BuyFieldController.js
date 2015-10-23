app.controller('buyFieldCtrl', function($scope, $rootScope) {
    
    $scope.fieldPopInShow = false;
    $scope.buyField = function(){
    	var moneyBag = [];
        var fieldNb = 0;
    	for(var i=0;i<=$scope.money;i+=25) {
  			moneyBag.push(fieldNb);
            fieldNb++;
		}
    	$scope.moneyBag = moneyBag;
    	$scope.fieldPopInShow = !$scope.fieldPopInShow;
        if($rootScope.time != 0){
            $rootScope.gameBreak = !$rootScope.gameBreak;    
        }
    	
    };

    $scope.closeFieldPopIn = function(){
    	$scope.fieldPopInShow = !$scope.fieldPopInShow;
    	$rootScope.gameBreak = false;
    };

    $scope.buyFieldPopIn = function(){
        var fieldQuantity = parseInt($scope.selectFieldQuantity);
        for(var i = 0; i<fieldQuantity; i++){
        	if($rootScope.money>=25){
                $rootScope.money -= 25;
                $rootScope.fields.push(new FieldModel($rootScope.fields.lenght));
            }else{
            	break;
            }	
        }
        
    	$scope.fieldPopInShow = !$scope.fieldPopInShow;
    	$rootScope.gameBreak = false;
    };
});

