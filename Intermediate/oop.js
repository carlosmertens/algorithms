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
