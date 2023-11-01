console.log('\n********** Factory Functions **********');
// createCircle
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
