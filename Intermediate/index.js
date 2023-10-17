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

console.log('\n********** OBJECT REVIEW **********');

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

console.log('\n********** STOP WATCH **********');
// Stop watch with start, stop and reset methods.
// Use constructor function

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });

  Object.defineProperty(this, 'startTime', {
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, 'endTime', {
    get: function () {
      return endTime;
    },
  });

  Object.defineProperty(this, 'running', {
    get: function () {
      return running;
    },
  });
}

StopWatch.prototype.start = function () {
  if (this.running) throw new Error('Stopwatch is already started.');
  this.running = true;
  this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
  if (!this.running) throw Error('Stopwatch has not yet started.');
  this.running = false;
  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  this.duration += seconds;
};

StopWatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

console.log('\n********** STREET FIGHT ***********');
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

console.log('\n********** CALCULATE DAYS ***********');
// Inplement street fight game with object and methods
// Exercise
// Create function with (startDay, endDay)
// Create a JS function that will accept startingDate and endDate as parameters in dd/mm/yyy format
// With out using the Date class and its methods this function should return the total number of days between these two dates
// function daysCalculator(startingDate, endDate)
// function must return the total number of days between them. like 8000 days
// Print those days on terminal using the console.log
////////////////////////////

function daysTotal(date) {
  const [day, month, year] = date.split('/').map((str) => Number(str));
  const monthsValues = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let output = day + year * 365; // Ititialize with days and years provided

  // Iterate months excluding actual month
  for (let i = 1; i < month; i++) output += monthsValues[i];

  // Iterate for leap year
  for (let i = 1; i <= year; i++) {
    if (i % 4 === 0) output += 1;
  }

  return output;
}

const daysDifference = (date1, date2) => daysTotal(date2) - daysTotal(date1);

const finalResult = daysDifference('01/01/2000', '01/11/2040');
// console.log({ finalResult });

// Test with JS Date method
const diffInMs =
  new Date('11/01/2040 00:00:00') - new Date('01/01/2000 00:00:00');
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// console.log({ diffInDays });

console.log('\n********** SORT BOOKS TITLE ***********');
// Given an array of books, sort them by title, in alphabetical
// order, from "a" to "z"

const books = [
  {
    title: "The Handmaid's Tale",
    authors: ['Margaret Atwood'],
    rating: 4.13,
    genres: ['fiction', 'dystopia'],
  },
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    authors: ['Gabrielle Zevin'],
    rating: 4.26,
    genres: ['fiction'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
];

function orderByTitle(bookA, bookB) {
  if (bookA.title > bookB.title) {
    return 1;
  } else if (bookA.title < bookB.title) {
    return -1;
  } else {
    return 0;
  }
}

let result = [...books].sort(orderByTitle);

// console.log(result);

console.log('\n********** HTML ELEMENT METHODS ***********');

// Create constructor function (Parent)
function HtmlElement() {
  this.click = function () {
    console.log('Clicked!');
  };
}
// Add focus method to the prototype
HtmlElement.prototype.focus = function () {
  console.log('Focus!');
};

// Create another constructor function (child)
function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    return `
    <select>${this.items
      .map(
        (item) => `
      <option>${item}</option>`
      )
      .join('')}
    </select>`;
  };
}
// ATENTION
// Set child prototype to an instance of the parent prototype
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// Create another constructor function (child)
function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img> src="${this.src}" />`;
  };
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elem = new HtmlElement();
// console.log({ elem });

const childElem = new HtmlSelectElement();
// console.log({ childElem });

const imgElem = new HtmlImageElement('//http:');

console.log('\n********** HTML ELEMENT INTERACTION ***********');

/* Create a HTMLElement class called to represent a generic HTML element.

The class should contain the following properties:

element: a string representing the HTML element, for example div, span, h1...
id: a string with the element id.
default value: ""
classList: an array of strings containing the element's CSS classes
default value: []
The class has the following methods:

addCSSClass(className): it takes a class name in input. It checks whether the class is already inside the classList array. If it isn't, it adds it at the end of the classList array
removeCSSClass(className): it takes a class name in input and removes the matching class from the classList array.
showHTML(): it prints a string showing the HTML element with its id and classes, for example: "<section id="about-section" class="page-section container alt-bg">...</section>"

*/

class HTMLClasses {
  constructor(element, id, classList) {
    this.element = element;
    this.id = id;
    this.classList = classList;
  }

  addCSSClass(className) {
    if (!this.classList.includes(className)) {
      this.classList.push(className);
      console.log('className added:\n', this.classList);
    } else {
      console.log('className already exist!');
    }
  }

  removeCSSClass(className) {
    if (this.classList.includes(className)) {
      const index = this.classList.indexOf(className);
      this.classList.splice(index, 1);
      console.log('className removed:\n', this.classList);
    } else {
      console.log('className does not exist!');
    }
  }

  showHTML() {
    return `<${this.element} id="${this.id}" class="${this.classList.join(
      ' '
    )}">...</${this.element}>`;
  }
}

// const section = new HTMLClasses('section', 'about-section', []);

// section.addCSSClass('page-section');
// section.addCSSClass('container');

// section.removeCSSClass('container');
// console.log(section.showHTML()); // <section id="about-section" class="page-section container">...</section>

// const div = new HTMLClasses('div', '', []);
// console.log(div.showHTML()); // <div id="" class="">...</div>
