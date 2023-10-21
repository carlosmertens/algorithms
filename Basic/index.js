console.log('\n********** 8. Remove Vowels **********');
// 8. RemoveVowels
// Algorithm to remove vowels from a string using regex or looping and concatenating

const removeVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let output = '';

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i].toLowerCase())) output += string[i];
  }
  console.log({ output });

  return string.replace(/[aeiou]/gi, '');
};

// console.log(removeVowels('table')); // "tbl"
// console.log(removeVowels('JavaScript')); // "JvScrpt"
// console.log('Result:', removeVowels('AEIOU')); // ""
// console.log(removeVowels('ABCDe')); // "BCD"

console.log('\n********** 9. Reverse String **********');
// 9. Reverse String
// Reverse string

const reverseString = (string) => string.split('').reverse().join('');

// console.log(reverseString('table')); // "elbat"
// console.log(reverseString('blabla')); // "albalb"
// console.log(reverseString('')); // ""
// console.log(reverseString('tomato')); // "otamot"
// console.log(reverseString('cat')); // "tac"

console.log('\n********** 10. Area of circle **********');
// 10. Area of Circle
// Create an object with a metho to calculate the area of a circle

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

// console.log(circle.area);

// circle.radius = 2;

// console.log(circle.area);

console.log('\n********** 11. Error Handling **********');
// 11. ERROR HANDLING
// Use error handling in a sum items form am erray function.

// try {
//   const numbersArray = [1, 2, 5, 7];
//   // const count = sumArray(numbersArray);
//   const count = sumArray('');
//   console.log(count);
// } catch (error) {
//   console.log(error.message);
// }

function sumArray(arr) {
  if (!Array.isArray(arr))
    throw new Error('Invalid array of numbers! Please try again.');

  return arr.reduce((acummulator, currentValue) => acummulator + currentValue);
}

console.log('\n********** 12. Array Range **********');
// 12. arrayRange
// Create an array with a range of 2 numbers.

function arrayRange(min, max) {
  const newArray = [];
  for (let i = min; i <= max; i++) newArray.push(i);

  return newArray;
}

// console.log(arrayRange(2, 1));

console.log('\n********** 13. Move Element **********');
// 13. move
// Given an array, index and offset, return new array with the lement moved.
// Handle errors

const arr1 = [1, 2, 3, 4];

const arr1Moved = move(arr1, 1, 1);

// console.log(arr1Moved);

function move(array, index, offset) {
  const output = [...array];
  const position = index + offset;

  if (position >= array.length || position < 0) {
    console.error('Invalid offset. Can not move out of the array!');
    return output;
  }

  const elem = output.splice(index, 1)[0];
  output.splice(position, 0, elem);

  return output;
}

// function move(array, index, offset) {
//   const output = [];
//   let elem = array.splice(index, 1);
//   console.log({ elem });
//   console.log(array.splice(offset, 0, elem[0]));
//   console.log(array);

//   return output;
// }

console.log('\n********** 14. Max Element with Reduce Method **********');
// 14. getMax
// find the max number in an array using the reduce method.

function getMax(arr) {
  if (arr.length === 0) return undefined;

  return arr.reduce((accu, current) => (accu > current ? accu : current));
}

// console.log(getMax([1, 2, 3, 4]));

console.log('\n********** 15. Factory Functions **********');
// 15. createCircle
// Use Object Oriented Programming (OOP) to create a circle
// Use Factory Functions approach

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('Draw a circle with factory function');
    },
  };
}

const circle1 = createCircle(1);
// console.log({ circle1 });

const circle2 = createCircle(4);
// console.log({ circle2 });

console.log('\n********** 16. Constructor Functions **********');
// 16. CreateCircle
// Use Object Oriented Programming (OOP) to create a circle
// Use Constructor Functions approach

function CreateCircle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log('Draw a circle with construction function');
    });
}

const circle3 = new CreateCircle(1);
// console.log({ circle3 });
// circle3.draw();

console.log('\n********** 16. Object Iteration **********');
// 16. Iterate Objects

const circle4 = createCircle(5);
// console.log({ circle4 });

// // Use for-in
// for (const key in circle4) {
//   // console.log(key);
//   console.log(key, circle[key]);
// }

// // Use if-in
// if ('radius' in circle) {
//   console.log('yes');
// } else {
//   console.log('radius is missing');
// }

// // Use for-of
// for (const key of Object.keys(circle4)) {
//   console.log({ key });
// }

// for (const entry of Object.entries(circle4)) {
//   console.log(entry);
// }

console.log('\n********** 17. Blog Post Object **********');
// 17. Post
// Use constructor function to initialate a Post object

// let post = {
//   title: 'Some title',
//   body: 'the body can containg a short or long string.',
//   author: 'Who am I',
//   views: 6,
//   comments: {
//     author: 'Who are they',
//     body: 'Good to know. Thanks',
//   },
//   isLive: true,
// };

const post = new Post(
  'Some title',
  'the body can containg a short or long string.',
  'Who am I'
);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

// console.log(post);

console.log('\n********** 18. Movie Filter **********');
// 18. Post
// Fiter objects to display movies preferences
// all the movies in 2018 with rating > 4
// sort them by rating in descending order
// Pick their title

const movies = [
  { title: 'The Rain', year: 2018, rating: 4.5 },
  { title: 'The Cloud', year: 2018, rating: 4.7 },
  { title: 'The Mountain', year: 2018, rating: 3 },
  { title: 'The Sky', year: 2017, rating: 4.5 },
];

const filteredMovies = movies
  .filter((movie) => movie.year === 2018 && movie.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((movie) => movie.title);

console.log({ filteredMovies });

//////////////// EXERCISES - TESTS

const test = {
  color: 'yellow',
};

const test1 = { ...test, ...circle4 };
// console.log(test1);

const test2 = Object.assign(test, circle4);
// console.log(test2);

const date1 = new Date();
// console.log({ date1 });

////////////////

// const adreess = {
//   street: 'abc',
//   city: 'def',
//   zipCode: '123',
// };

function showAddress(obj) {
  for (const key in obj) {
    console.log(key, obj[key]);
  }
}

// showAddress(adreess);

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const myAddress = createAddress('xyz', 'jkl', '987');

// console.log(myAddress);

function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const yourAddress = new CreateAddress('xyz', 'jkl', '987');
// console.log(yourAddress);

let priceRange = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
  { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [{ averagePerPerson: 5 }];
