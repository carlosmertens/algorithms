'use strict';

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
