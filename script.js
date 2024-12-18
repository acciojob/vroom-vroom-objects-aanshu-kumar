// Complete the js code
function Car(make, model) {
	constructor(make,model){
		this.make=make;
		this.model=model;
	}
	get getMakeModel(){
		return (this.make+" "+this.model);
	}
}

function SportsCar(make, model, topSpeed) extends Car {
	constructor(make,model,topSpeed)
	{
		super(make,model);
		this.topSpeed=topSpeed;
	}
	get getTopSpeed(){
		return this.topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
