console.log('\n********** Move Element **********');
// move
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
