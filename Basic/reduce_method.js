console.log('\n********** Max Element with Reduce Method **********');
// getMax
// find the max number in an array using the reduce method.

function getMax(arr) {
  if (arr.length === 0) return undefined;

  return arr.reduce((accu, current) => (accu > current ? accu : current));
}

// console.log(getMax([1, 2, 3, 4]));
