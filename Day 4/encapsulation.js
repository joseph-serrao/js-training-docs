class Car {
    #speed; 
    
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
      this.#speed = 0;
    }
  
    accelerate(amount) {
      this.#speed += amount;
      console.log(`${this.brand} ${this.model} is going at ${this.#speed} km/h`);
    }
  
    getSpeed() {
      return this.#speed;
    }
  }
  
  const myCar = new Car("Toyota", "Corolla");
  myCar.accelerate(20);
  // console.log(myCar.#speed);
  console.log(myCar.getSpeed()); 
  