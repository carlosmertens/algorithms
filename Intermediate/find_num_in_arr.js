console.log('\n********** Find Number In Array **********');
// Recursive approach
// Function takes 2 parameters, a number to find and an array (could be nested arrays) where to fin the number.

function findNumInArr(n, arr) {
  let hasNum = false;

  arr.forEach((el) => {
    if (el === n) {
      hasNum = true;
    }

    if (Array.isArray(el)) {
      hasNum = findNumInArr(n, el);
    }
  });

  return hasNum;
}

console.log(findNumInArr(7, [1, 3, 4, 6, [1, 4, [7]]]));
