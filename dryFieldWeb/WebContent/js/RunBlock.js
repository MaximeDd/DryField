app.run(function($rootScope, $interval, $modal) {

    //game parameters initialisation
	$rootScope.money = 50;
	$rootScope.harvestNumber = 0;
	$rootScope.waterStock = 3;
	$rootScope.gameBreak = true;
	$rootScope.fields = [];
	$rootScope.fields.push(new FieldModel(0));
	$rootScope.fields.push(new FieldModel(1));
	$rootScope.fields.push(new FieldModel(2));
	$rootScope.time = 0;
	
	$interval(function(){
	    	if($rootScope.gameBreak == false){
	    		$rootScope.time ++;
	    		if (($rootScope.time%10) ===0){

    				// game over check
    				if($rootScope.fields.length===0){
    					$rootScope.gameBreak = true;
    					$rootScope.openGameOverModal();
    				}
    				for( var i = 0; i < $rootScope.fields.length -1; i++){
    					if($rootScope.fields[i].stock+$rootScope.fields[i].ripeness/5+$rootScope.money+$rootScope.waterStock>=20){
    						break;
    					}
    					$rootScope.gameBreak = true;
    					$rootScope.openGameOverModal();	
    				}

    				for( var i = 0; i < $rootScope.fields.length; i++){
    					$rootScope.fields[i].age++;
    					$rootScope.fields[i].setWaterConsumption();
    					$rootScope.fields[i].growCrop();
    				}

    				// climatic disorder
					var nRandom = Math.floor(Math.random()*1500);
    				console.log("aléatoire : " + nRandom);	
    				
					switch(nRandom){
						case 1 :
							$rootScope.gameBreak = true;
							$rootScope.openClimateModal('html/circleTemplate.html');
    						for( var i = 0; i < $rootScope.fields.length; i++){
    							$rootScope.fields[i].setRipeness(0);
    						}
    						$rootScope.money+=25;
    						break;
    					case 2 :
							$rootScope.gameBreak = true;
							$rootScope.openClimateModal('html/floodTemplate.html');
    						for( var i = 0; i < $rootScope.fields.length; i++){
    							$rootScope.fields[i].setRipeness(0);
    							$rootScope.fields[i].setStock(5);
    						}
    						break; 
    					case 3 :
							$rootScope.gameBreak = true;
							$rootScope.openClimateModal('html/earthquakeTemplate.html');
    						$rootScope.fields.pop();
    						break;
    					case 4 :
							$rootScope.gameBreak = true;
							$rootScope.openClimateModal('html/contaminatedWaterTemplate.html');
    						$rootScope.waterStock = 0;
    						break;
    					case 5 :
							$rootScope.gameBreak = true;
							$rootScope.openClimateModal('html/tornadoTemplate.html');
    						for( var i = 0; i < $rootScope.fields.length; i++){
    							$rootScope.fields[i].setRipeness(0);
    						}
    						break;  
					}   					
	    		}
	    	}
		}, 100);


    $rootScope.openGameOverModal = function () {
    	var modalInstance = $modal.open({
      		animation: false,
      		templateUrl : 'html/gameOverTemplate.html',
      		controller: 'gameOverModalCtrl',
      		size: 'lg',
      		resolve: {
        		items: function () {
          			return $rootScope.harvestNumber;
        		}
      		}
    	});
	};

    $rootScope.openClimateModal = function (template) {
    	var modalInstance = $modal.open({
      		animation: false,
      		templateUrl : template,
      		controller: 'climateModalCtrl',
      		size: 'lg',
      		resolve: {
        		items: function () {
          			return $rootScope.gameBreak;
        		}
      		}
    	});
  	};




  });

