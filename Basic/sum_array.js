console.log('\n********** Sum Numerical Array **********');
// ***** Sum Numerical Array
// sum all the items in a numerical array using reduce method

const numbers = [1, -1, 2, 5];

function sumArray(arr) {
  return arr.reduce((acummulator, currentValue) => acummulator + currentValue);
}

// console.log(sumArray(numbers));
