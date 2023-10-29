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
