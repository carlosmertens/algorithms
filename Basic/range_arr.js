console.log('\n********** Array Range **********');
// arrayRange
// Create an array with a range of 2 numbers.

function arrayRange(min, max) {
  const newArray = [];
  for (let i = min; i <= max; i++) newArray.push(i);

  return newArray;
}

// console.log(arrayRange(2, 1));
