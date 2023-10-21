console.log('\n********** Sum Numerical Arguments **********');
// ***** Sum unlimited number of arguments pass to the function
// sum unknown number of arguments pass to the function with rest operator

function sumArguments(...args) {
  console.log(Array.isArray(args[0]));

  if (args.length === 1 && Array.isArray(args[0])) {
    args = [...args[0]];
  }

  return args.reduce((acummulator, currentValue) => acummulator + currentValue);
}

// console.log(sumArguments([1, 2, 3, 4, 5, 10]));
// console.log(sumArguments(1, 2, 3, 4, 5, 10));
