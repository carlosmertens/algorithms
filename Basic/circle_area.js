console.log('\n********** Area of circle **********');
// Area of Circle
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
