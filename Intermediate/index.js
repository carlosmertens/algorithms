console.log('*************** INTERMEDIATE  ALGORITHMS ***************');

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

console.log('\n********** WEAKMAP HIDDEN PROPERTIES ***********');
// Use WeakMap to hide a property
// Set setters and getters

const _radius = new WeakMap();

class Oval {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('Invalid radius!');
    _radius.set(this, value);
  }
}

console.log('\n********** STACK ALGORITHM ***********');
// Use private properties

const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }

  push(value) {
    _stack.get(this).push(value);
  }

  pop() {
    const items = _stack.get(this);
    if (items.length === 0) throw new Error('Stack is empty!');

    return items.pop();
  }

  peak() {
    const items = _stack.get(this);
    if (items.length === 0) throw new Error('Stack is empty!');

    return items[items.length - 1];
  }

  get count() {
    return _stack.get(this).length;
  }
}

console.log('\n********** Unique Array ***********');
// Create own method to retur unique elements of an array
// Add the method to the Array.prototype
// For experimentation but is bad practice

const arr = [3, 66, 5, 77, 43, 66, 5, 8, 8, 66];

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
