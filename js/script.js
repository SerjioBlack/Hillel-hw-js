'use strict';

(() => {
  function Human(name, age) {
    this.name = name;
    this.age = age;
  }

  Human.prototype.displayInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };

  function Car(brand, model, year, licensePlate, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;

    if (owner instanceof Human && owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("Invalid owner or owner is under 18 years old.");
    }
  }

  Car.prototype.displayInfo = function () {
    console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year},
License Plate: ${this.licensePlate}`);
    if (this.owner) {
      console.log("Owner Info:");
      this.owner.displayInfo();
    }
  };

  const person1 = new Human("Vova", 25);
  const person2 = new Human("Vasya", 17);

  const car1 = new Car("Toyota", "Camry", 2020, "ABC123", person1);
  const car2 = new Car("Honda", "Civic", 2018, "XYZ789", person2);

  car1.displayInfo();
  car2.displayInfo();

})();
