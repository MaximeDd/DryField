var FieldModel = (function(){
	'use strict';

	function FieldModel(id){
	    	this.data = {};
	    	this.id = id;
	    	this.stock = 3;
	    	this.ripeness = 0;
	    	this.age = 0;
	    	this.waterConsumption= 1;
	    	this.quickIrrigation = false;
	}

	FieldModel.prototype.setWaterConsumption = function(){
	    if(this.waterConsumption<3){
    		this.waterConsumption = (this.age/9000)+1;
    		this.waterConsumption = this.waterConsumption.toFixed(3);
    	}
	}

	FieldModel.prototype.growCrop = function(){
	    if (this.stock>=1){
	    	if (this.ripeness<100){
	    		this.ripeness +=5;
	    		this.stock -= this.waterConsumption;
	    	}
	    }else{
	    	this.ripeness = 0;
	    	this.stock = 0;
	    }
	}

	FieldModel.prototype.setRipeness = function(ripeness){
		this.ripeness = ripeness;
	}

	FieldModel.prototype.setStock = function(stock){
		this.stock = stock;
	}

	return FieldModel;
}).call(this);

