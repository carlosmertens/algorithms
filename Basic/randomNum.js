console.log('\n********** Random Number **********');
// Function that generates a randon number, given minimun and maximun range.
// min and max included

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNum(2, 4));
