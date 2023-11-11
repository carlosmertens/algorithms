'use strict';

// console.log('********** OBJECT ORIENTED PROGRAMMING (OOP) **********');

console.log('********** CONSTRUCTOR FUNCTIONS **********');
/*
///// CONSTRUCTOR FUNCTIONS /////

- Use function declaration expression to build an object template 
- Never use arrow function 
- Use the keyword "new" to initialize an instance
  1. New {} is created
  2. Function is called, this = {}
  3. {} is linked to prototype object
  4. function automatically return {}

*/

// Create a construction function Person (base)
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Initialize instances carlos and daniel (children)
const carlos = new Person('Carlos', 1980);
const daniel = new Person('Daniel', 1990);

// Add method to Person prototype (base)
Person.prototype.age = function () {
  return 2023 - this.birthYear;
};

const danielAge = daniel.age();

// Add property to Person prototype (base)
Person.prototype.species = 'Human';

// Prototype chain
console.log({ daniel });
console.log('daniel.__proto__:', daniel.__proto__);
console.log('daniel.prototype:', daniel.prototype);

console.log({ Person });
console.log('Person.__proto__:', Person.__proto__);
console.log('Person.prototype:', Person.prototype);

console.log(
  'Therefore, Person.prototype === daniel.__proto__:',
  Person.prototype === daniel.__proto__
);

console.log({ Object });
console.log('Object.__proto__:', Object.__proto__);
console.log('Object.prototype:', Object.prototype);
console.log(
  'Therefore, Person.__proto__ === Object.__proto__:',
  Person.__proto__ === Object.__proto__
);

/*
// CODING EXERCISE 1
- Use a construction function to implement a Car
- A Car has a make and a speed properties
- The speed property is the current speed of the car in km/h
- Implement an "accelerate" method that increases speed by 10 and log new speed
- Implement a "break" method that will decrease spped by 5 and log new speed

DATA 1: "BMW" going at 120 km/h
DATA 2: "Mercedes" going at 95 km/h
*/
console.log('***** CODING EXERCISE 1 *****');

function Car(make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
}

Car.prototype.accelerate = function () {
  this.currentSpeed += 10;
  console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
};

Car.prototype.break = function () {
  this.currentSpeed -= 5;
  console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1);
car1.accelerate();
car1.accelerate();
car1.break();
console.log(car1);

console.log('********** ES6 CLASSES **********');
/*
///// ES6 CLASSES /////

- Classes are NOT hoisted
- Classes are executed in strict mode
- The properties are declare in the constructor method
- Class methods outside the constructor, will be created on the prototype

*/

class Employee {
  constructor(firstName, lastName, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  }

  info() {
    console.log(`*** ${this.firstName} ${this.lastName}, ${this.position} ***`);
  }
}

const employee1 = new Employee('Carlos', 'Mertens', 'Developer');

console.log(employee1);
employee1.info();

/*
// CODING EXERCISE 2
- Re-create exercise 1 with ES6 class;
- Add a getter called "speedUS" that retuns the speed in miles (mi/h)
- km / 1.6 = mi
- Add setter called "sppedUS" which sets the current speed in mi/h (but converts it to km/h before stroring the value, by multiplying by 1.6) 

DATA 1: "BMW" going at 120 km/h
DATA 2: "Mercedes" going at 95 km/h
*/
console.log('***** CODING EXERCISE 2 *****');

class CarCL {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }

  accelerate() {
    this.currentSpeed += 10;
    console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
  }

  break() {
    this.currentSpeed -= 5;
    console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
  }

  get speedUS() {
    return this.currentSpeed / 1.6;
  }

  set speedUS(speed) {
    this.currentSpeed = speed * 1.6;
  }
}

const ford = new CarCL('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);
