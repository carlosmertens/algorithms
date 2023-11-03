console.log('\n********** Fibonacci Number **********');
// Recursive approach
// Function fib() takes n as argument
// returns the element at index n of the sequence
// Fibonacci: each element except for the first two is the sum of the preceding two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function fib(n) {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  }

  return n;
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(5)); // 5
console.log(fib(6)); // 8

console.log('\n********** Fibonacci Sequence **********');
// For Loop and Recursive approach
// Function fibNums() takes n as argument
// returns and array of fibonacci sequence at given n
// Fibonacci: each element except for the first two is the sum of the preceding two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// function fibNums(n) {
//   const output = n < 1 ? [0] : [0, 1];

//   for (i = 2; i <= n; i++) {
//     output.push(output[i - 1] + output[i - 2]);
//   }

//   return output;
// }

function fibNums(n) {
  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return [0, 1];
  }

  if (n < 0) {
    return 'Please provide a positive number!';
  }

  const output = fibNums(n - 1);
  // output.push(output[n - 1] + output[n - 2]);

  return [...output, output[n - 1] + output[n - 2]];
}

console.log('-------------');
console.log(fibNums(0)); // [0]
console.log(fibNums(1)); // [0, 1]
console.log(fibNums(2)); // [0, 1, 1]
console.log(fibNums(3)); // [0, 1, 1, 2]
console.log(fibNums(4)); // [0, 1, 1, 2, 3]
console.log(fibNums(5)); // [0, 1, 1, 2, 3, 5]
console.log(fibNums(6)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibNums(7)); // [0, 1, 1, 2, 3, 5, 8, 13]
