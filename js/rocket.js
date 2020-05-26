var doCoolStuff = function() {
	var currentClassName = 
	document.getElementById ('cool').className;
	if (currentClassName =='cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById ('cool').className = 'cool';
	}
}

var sayMyName =function (name) {
	alert ('My Name is'+  name);
}

var car = { 
			make: 'vw',
			type:'polo',
			color:'blue',
			isTurnedOn: false,
			numberofwheels: 4,
			seat: [
				'seat 1',
				'seat 2',
				'seat 3',
				'seat 4'
			],
			turnOn: function () {
				this.isTurnedOn = true;
			},
			fly : function () {
				alert ('fly')
			},
			switchCar : function (isOn) {
				console.log ('turn car'+isOn);
				if (isOn ==true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}

			}

		};
		console.log ('hello World');