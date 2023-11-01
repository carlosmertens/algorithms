console.log('\n********** Constructor Functions **********');
// CreateCircle
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
