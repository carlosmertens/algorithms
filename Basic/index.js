// ***** 1. FizzBuzz algorithm
// If divisible by 3, returns "fizz". If divisible by 5, returns "Buzz". And if divisible by 3 and 5, returns "FizzBuzz"

console.log('\n********** 1. FizzBuzz **********');

const output = fizzBuzz(10);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;
  // else if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  else if (input % 15 === 0) return 'FizzBuzz';
  else if (input % 3 === 0) return 'Fizz';
  else if (input % 5 === 0) return 'Buzz';
  else return input;
}

// ***** 2. CheckSpeed function

// Speed Limit = 70
// every 5 speed over the limit gets 1 point
// Use Math.floor()
// 12 points over the license is suspended

console.log('\n********** 2. Check Speed **********');

checkSpeed(80);

function checkSpeed(speed) {
  const speedLimit = 70;
  const pointsLimit = 12;
  const kmPerPoint = 5;

  if (speed <= speedLimit + kmPerPoint) {
    console.log('OK');
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= pointsLimit) console.log('License suspended');
  else if (points < 1) console.log('OK');
  else console.log('Points:', points);
}

// ***** 3. Function that calculates the grade of a studend in letters

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log('\n********** 3. Calculate Grade **********');

const marks = [90, 80, 100];
console.log(calculateGrade(marks));

function calculateGrade(arr) {
  const avg = calculateAverage(arr);

  if (avg < 60) grade = 'F';
  else if (avg < 70) return 'D';
  else if (avg < 80) return 'C';
  else if (avg < 90) return 'B';
  else return 'A';
}

function calculateAverage(arr) {
  let sum = 0;
  for (const value of arr) sum += value;

  return sum / arr.length;
}

// ***** 4. showPrimes function returns prime numbers base on limit provided.

console.log('\n********** 4. Show Primes **********');

showPrimes(10);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

// ***** 5. Sum Numerical Array
// sum all the items in a numerical array using reduce method

console.log('\n********** 5. Sum Numerical Array **********');

const numbers = [1, -1, 2, 5];

function sumArray(arr) {
  return arr.reduce((acummulator, currentValue) => acummulator + currentValue);
}

console.log(sumArray(numbers));

// ***** 6. Sum unlimited number of arguments pass to the function
// sum unknown number of arguments pass to the function with rest operator

console.log('\n********** 6. Sum Numerical Arguments **********');

function sumArguments(...args) {
  return args.reduce((acummulator, currentValue) => acummulator + currentValue);
}

console.log(sumArguments(1, 2, 3, 4, 5, 10));

// ***** 7. Interst Rate Algorithm
// Calculate interest rate for a loan and use default parameters

console.log('\n********** 7. Interest Rate Calculator **********');

function interestRate(principal = 300000, rate = 1.5, years = 15) {
  return ((principal * rate) / 100) * years;
}

console.log(interestRate());

// 8. RemoveVowels
// Algorithm to remove vowels from a string using regex or looping and concatenating

console.log('\n********** 8. Remove Vowels **********');

const removeVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i].toLowerCase())) {
      newString += string[i];
    }
  }
  console.log({ newString });

  return string.replace(/[aeiou]/gi, '');
};

console.log(removeVowels('table')); // "tbl"
console.log(removeVowels('JavaScript')); // "JvScrpt"
console.log('Result:', removeVowels('AEIOU')); // ""
console.log(removeVowels('ABCDe')); // "BCD"

// 9. Reverse String
// Reverse string

console.log('\n********** 9. Reverse String **********');

const reverseString = (string) => string.split('').reverse().join('');

console.log(reverseString('table')); // "elbat"
console.log(reverseString('blabla')); // "albalb"
console.log(reverseString('')); // ""
console.log(reverseString('tomato')); // "otamot"
console.log(reverseString('cat')); // "tac"
