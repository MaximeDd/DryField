app.controller('fieldCtrl', function($scope, $rootScope) {
	$scope.Math = window.Math;

    var myInterval;
    var myTimer;
    var mouseUp = 0;

    $scope.irrigate = function(fieldNb){
        console.log('click');
    	$rootScope.gameBreak = false;
        var myField = $rootScope.fields[fieldNb];
        if($rootScope.waterStock>0){
    	 	$rootScope.waterStock --;
    	   	myField.stock ++;
        } 
    };

    $scope.quickIrrigate = function(fieldNb){
        $rootScope.gameBreak = false;
        var myField = $rootScope.fields[fieldNb];

        
        myTimer = setInterval(function(){
            mouseUp++;     
        }, 100);

        var myTimeout = setTimeout(function(){       
            if (mouseUp>8) {
                myInterval = setInterval(function(){
                    if($rootScope.waterStock>10 && mouseUp > 20){
                        $rootScope.irrigateInProgress = true;
                        myField.quickIrrigation = true;
                        $rootScope.waterStock -=10;
                        myField.stock +=10;
                    }else if($rootScope.waterStock>0){
                        $rootScope.irrigateInProgress = true;
                        myField.quickIrrigation = true;
                        $rootScope.waterStock --;
                        myField.stock ++;
                    }else{
                        $rootScope.irrigateInProgress = false;
                        myField.quickIrrigation = false;
                    }
                }, 250);
            }
        },1000);
    };
    
    $rootScope.stopIrrigate = function(fieldNb){
        var myField = $rootScope.fields[fieldNb];
        mouseUp = 0;
        myField.quickIrrigation = false;
        window.clearInterval(myTimer);
        if (myInterval!==undefined){
            window.clearInterval(myInterval);    
        }
    };

    $scope.harvest= function(fieldNb){
    	var myField = $rootScope.fields[fieldNb];
        if(myField.ripeness>=100){
       		$rootScope.money += 40;
   	   		myField.ripeness =0;
   	   		$rootScope.harvestNumber++;
        }
    };
});