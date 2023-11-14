'use strict';

console.log('// *************** CONSTRUCTOR FUNCTIONS *************** //');
console.log('\n>>> Example 1 (Person/Studen Objects)\n');

// *** Create a construction function *** //
function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

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

// *** Test Prototype chain *** //

// console.log({ daniel });
// console.log('daniel.__proto__:', daniel.__proto__);
// console.log('daniel.prototype:', daniel.prototype);

// console.log({ Person });
// console.log('Person.__proto__:', Person.__proto__);
// console.log('Person.prototype:', Person.prototype);

// console.log(
//   'Therefore, Person.prototype === daniel.__proto__:',
//   Person.prototype === daniel.__proto__
// );

// console.log({ Object });
// console.log('Object.__proto__:', Object.__proto__);
// console.log('Object.prototype:', Object.prototype);
// console.log(
//   'Therefore, Person.__proto__ === Object.__proto__:',
//   Person.__proto__ === Object.__proto__
// );

// *** Inheritance between constructor functions *** //
function Student(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
}

// Link Student prototype to Person prototype
Student.prototype = Object.create(Person.prototype);
// Set constructor function to Student
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 1990, 'Computer Science');
mike.introduce();
console.log(mike.age());

////////////////////////////////////////////////////////////////////////////////

console.log('\n>>> Example 2 (Car/EV Objects)\n');

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

// console.log(car1);
car1.accelerate();
// car1.accelerate();
car1.break();
// console.log(car1);

function EV(make, currentSpeed, currentCharge) {
  Car.call(this, make, currentSpeed);
  this.currentCharge = currentCharge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.currentCharge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.currentSpeed += 20;
  this.currentCharge--;
  console.log(
    `${this.make} is going at ${this.currentSpeed} km/h, with a battery charge of ${this.currentCharge}`
  );
};

const tesla = new EV('Tesla', 120, 25);
// console.log(tesla);
tesla.chargeBattery(90);
// console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.break();

////////////////////////////////////////////////////////////////////////////////

console.log('\n// *************** ES6 CLASSES *************** //\n');

console.log('>>> Example 1 (Employee Objects)\n');

// *** Create a ES6 Class Object *** //
class Employee {
  constructor(firstName, lastName, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  }

  info() {
    console.log(`${this.firstName} ${this.lastName}, ${this.position}`);
  }
}

const employee1 = new Employee('Carlos', 'Mertens', 'Developer');

// console.log(employee1);
employee1.info();

// *** Inheritance between constructor functions *** //
class Intern extends Employee {
  constructor(firstName, lastName, department) {
    super(firstName, lastName);
    this.position = 'Intern';
    this.department = department;
  }

  greet() {
    console.log(`Hi! My name is ${this.firstName}, the new intern!`);
  }
}

const intern1 = new Intern('Pedro', 'Perez', 'Accounting');

intern1.greet();
intern1.info();

////////////////////////////////////////////////////////////////////////////////

console.log('\n>>> Example 2 (CarCL/EVcl Object)\n');

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
// console.log(ford.speedUS);
ford.accelerate();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);

class EVcl extends CarCL {
  #currentCharge;
  constructor(make, currentSpeed, currentCharge) {
    super(make, currentSpeed);
    this.#currentCharge = currentCharge;
  }

  chargeBattery(chargeTo) {
    this.#currentCharge = chargeTo;
    console.log('Battery is now at:', this.#currentCharge);

    return this;
  }

  displayInfo() {
    console.log(
      `${this.make} is going at ${
        this.currentSpeed
      } km/h, with a battery charge of ${this.#currentCharge}`
    );
  }

  accelerate() {
    this.currentSpeed += 20;
    this.#currentCharge--;
    this.displayInfo();

    return this;
  }

  break() {
    this.#currentCharge--;
    this.currentSpeed -= 10;
    this.displayInfo();

    return this;
  }
}

const rivian = new EVcl('Rivian', 100, 50);
console.log(rivian);
rivian.chargeBattery(80);
rivian.accelerate();
rivian.accelerate();
rivian.break();
rivian.accelerate().break().break().break();

////////////////////////////////////////////////////////////////////////////////

console.log('\n>>> Example 3 (Account Object)\n');
// Let's explore the future of classes in JS

class Account {
  // PUBLIC FIELD
  // Protected property (by convention) using _
  _locale = 'navigator.language';

  // PRIVATE FIELD
  // Protected property with #
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // Needed to be initialized outside the constructor
  }

  deposit(val) {
    this.#movements.push(val);

    // Return this will set methods to be chaining
    // z.B -> acc1.deposit(100).withdraw(50).deposit(400)
    return this;
  }

  withdraw(val) {
    this.deposit(-val);

    return this;
  }

  balance() {
    let amount =
      this.#movements.length < 1
        ? 'No movements!'
        : this.#movements.reduce((acc, val) => (acc += val), 0);

    console.log(`Your balance: ${this.currency} ${amount}`);

    return this;
  }

  // Static methods are not inherited
  static helper() {
    console.log('Helper Method!');

    return this;
  }
}

const acc1 = new Account('Arnie', 'EUR', 8989);
acc1.deposit(200);
acc1.withdraw(135);
acc1.balance();
// console.log(acc1.#movements);

console.log('\n// *************** OBJECT.CREATE *************** //\n');

console.log('>>> Example 1 (PersonProto Objects)\n');

// *** Create object with Object.create *** //
const PersonProto = {
  age() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const ana = Object.create(PersonProto);

console.log(ana);

ana.init('Ana', 1997);
console.log(ana);

ana.age();

// *** Inheritance between Object.create objects *** //
// Objective:
// Object.prototype -> Person

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
console.log(jay);

jay.init('Jay', 1995, 'Python');
console.log(jay);
jay.age();
