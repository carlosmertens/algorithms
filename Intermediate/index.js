console.log('***** OOP (Object Oriented Programming) ******');
// OOP (Object Oriented Programming)
// - ENCAPSULATION
// -- Reduce complexity + increase reusability
// - ABSTRACTION
// -- Reduce complexity + isolate impact of changes
// - INHERITANCE
// -- Eliminate redundant code
// - POLYMORPHISM
// -- Refactor ugly switch/case statement

console.log('*** Object Review ****');

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
  this.draw = function () {
    return `Constructor: Draw a circle. Private color is ${color}!`;
  };
}

const circle1 = new CreateCircle(1, 1, 2);
console.log(circle1.draw());
console.log(circle1);
