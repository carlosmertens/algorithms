console.log('**********  FizzBuzz **********');
// ***** 1. FizzBuzz algorithm
// If divisible by 3, returns "fizz". If divisible by 5, returns "Buzz". And if divisible by 3 and 5, returns "FizzBuzz"

const output = fizzBuzz(10);
// console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;
  // else if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  else if (input % 15 === 0) return 'FizzBuzz';
  else if (input % 3 === 0) return 'Fizz';
  else if (input % 5 === 0) return 'Buzz';
  else return input;
}
