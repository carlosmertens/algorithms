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
