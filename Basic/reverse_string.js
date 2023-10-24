console.log('\n********** 9. Reverse String **********');
// 9. Reverse String
// Reverse string with simple methods and with recursion

const reverseString = (string) => string.split('').reverse().join('');

// function reverseString(str) {
//   if (str.length === 0) {
//     return '';
//   } else {
//     return str[str.length - 1] + reverseString(str.slice(0, -1));
//   }
// }

// console.log(reverseString('table')); // "elbat"
// console.log(reverseString('blabla')); // "albalb"
// console.log(reverseString('')); // ""
// console.log(reverseString('tomato')); // "otamot"
// console.log(reverseString('cat')); // "tac"
