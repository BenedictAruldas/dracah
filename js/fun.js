var sayMyName = function (name) 
{
   alert ('My name is:'+ name);
}


var car = {
    		    make: 'vw',
    		    type: 'polo',
    		    color: 'blue',
    		    isTurnedOn: false,
    		    numberOfWheels: 4,
    		    seats: [
    		    'seat 1',
    		    'seat 2', 
    		    'seat 3', 
    		    'seat 4'
    		    ],
    		    turnOn: function () { 
    		    car.isTurnedOn = true;
    		    },
    		    fly : function () {
    		    	alert ('fly');
    		    },
    		    switchCar : function (isOn) {
    		    	console.log ('turn car'+ isOn)
    		    	    ;
    		    	if (isOn == true) {
    		    		car.isTurnedOn = true;
    		    	} else {
    		    		car.isTurnedOn = false;
    		    	}
    		    }
    	};
    	console.log ('hello world');
