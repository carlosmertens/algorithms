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

do {
  const coin = Math.floor(Math.random() * 2 + 1);
  if (coin === 1) player1.attack(player2);
  if (coin === 2) player2.attack(player1);
} while (player1.health > 1 && player2.health > 1);

const endMessage =
  player1.health > player2.health
    ? `>>> ${player1.name} wins!`.toUpperCase()
    : `>>> ${player2.name} wins!`.toUpperCase();

console.log(endMessage);
