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

console.log('\n********** Unique Array ***********');
// Create own method to retur unique elements of an array
// Add the method to the Array.prototype
// For experimentation but is bad practice

const arr = [3, 66, 5, 77, 43, 66, 5, 8, 8, 66];

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());
// let newArr = [1, 2, 3];
// console.log(newArr);
// newArr = {};
// console.log(newArr);

console.log(this);

// const h1 = document.querySelector('h1');

// 14 Which keywords are used in importing project dependencies into a file?
// import, require, add, none of the above

// let num = 1;
// (function (()) {
//   console.log(num);
// })();

// 18  We can use a try & catch block within a promise constructor?
// false
const promise = new Promise((resolve, reject) => {
  try {
    let x = false;
    if (x) resolve('Good');
    else throw new Error('Bad');
  } catch (error) {
    reject(error.message);
  }
});

promise.then((res) => console.log(res)).catch((rej) => console.log(rej));
