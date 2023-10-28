console.log('\n********** Error Handling **********');
// ERROR HANDLING
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
