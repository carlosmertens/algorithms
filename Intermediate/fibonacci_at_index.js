console.log('\n********** Fibonacci Number **********');
// Recusrive approach
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
