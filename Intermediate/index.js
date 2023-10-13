console.log('*************** INTERMEDIATE  ALGORITHMS ***************');
console.log('********** OOP (Object Oriented Programming) ***********');
// OOP (Object Oriented Programming)
// - ENCAPSULATION
// -- Reduce complexity + increase reusability
// - ABSTRACTION
// -- Reduce complexity + isolate impact of changes
// - INHERITANCE
// -- Eliminate redundant code
// - POLYMORPHISM
// -- Refactor ugly switch/case statement

console.log('\n********** Object Review **********');

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 2,
//   },
//   draw: function () {
//     console.log('Draw a circle!');
//   },
// };

function createCircle(radius, x, y) {
  return {
    radius,
    location: {
      x,
      y,
    },
    draw: function () {
      return 'Draw a circle!';
    },
  };
}

const circle = createCircle(1, 1, 2);
// console.log(circle.draw());
// console.log(circle);

delete circle.location;
// console.log({ circle });

function CreateCircle(radius, x, y) {
  let color = 'gray';
  let location = {
    x: x,
    y: y,
  };
  this.radius = radius;
  this.test = 5;
  this.draw = function () {
    return `Constructor: Draw a circle. Private color is ${color} and test is ${this.test}!`;
  };
}

const circle1 = new CreateCircle(1, 1, 2);
// console.log(circle1.draw());
// console.log(circle1);

// console.log('this...', this);

console.log('\n********** Stop Watch **********');
// Stop watch with start, stop and reset methods.
// Use constructor function

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error('Stopwatch is already started.');
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw Error('Stopwatch has not yet started.');
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });
}

console.log('\n********** Street Fight ***********');
// Inplement street fight game with object and methods

let player1 = createPlayer('Ken', 'Helicopter kick', 20);
let player2 = createPlayer('Ryu', 'Ascending punch', 20);

function createPlayer(name, attackSkill, attackDamage) {
  return {
    name,
    health: 100,
    attackSkill,
    attackDamage,
    attack(player) {
      player.health -= this.attackDamage;
      console.log(
        `${this.name} attacked ${player.name} with a ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${player.name}'s health is now ${player.health}.`
      );
    },
  };
}

// do {
//   const coin = Math.floor(Math.random() * 2 + 1);
//   if (coin === 1) player1.attack(player2);
//   if (coin === 2) player2.attack(player1);
// } while (player1.health > 1 && player2.health > 1);

const endMessage =
  player1.health > player2.health
    ? `>>> ${player1.name} wins!`.toUpperCase()
    : `>>> ${player2.name} wins!`.toUpperCase();

// console.log(endMessage);

console.log('\n********** Calculate Days ***********');
// Inplement street fight game with object and methods
// Exercise
// Create function with (startDay, endDay)
// Create a JS function that will accept startingDate and endDate as parameters in dd/mm/yyy format
// With out using the Date class and its methods this function should return the total number of days between these two dates
// function daysCalculator(startingDate, endDate)
// function must return the total number of days between them. like 8000 days
// Print those days on terminal using the console.log
////////////////////////////

// const result1 = totalDays('01/01/08');
// const result2 = totalDays('20/05/23');
// console.log({ result1 });
// console.log({ result2 });

function totalDays(date) {
  const [day, month, year] = date.split('/').map((str) => Number(str));
  const monthsValues = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let output = day; // Initialize output with days provided

  // Iterate months excluding actual month
  for (let i = 1; i < month; i++) {
    output += monthsValues[i];
  }

  output += year * 365; // Add total years

  // Iterate for leap year
  for (let i = 1; i <= year; i++) {
    if (i % 4 === 0) output += 1;
  }

  return output;
}

function daysDifference(date1, date2) {
  const totaldays1 = totalDays(date1);
  const totaldays2 = totalDays(date2);

  return totaldays2 - totaldays1;
}

const finalResult = daysDifference('01/01/2000', '01/01/2040');
console.log({ finalResult });

// Test with JS Date method
const diffInMs =
  new Date('01/01/2040 00:00:00') - new Date('01/01/2000 00:00:00');
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log({ diffInDays });
