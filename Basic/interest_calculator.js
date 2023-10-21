console.log('\n********** Interest Rate Calculator **********');
// ***** Interst Rate Algorithm
// Calculate interest rate for a loan and use default parameters

function interestRate(principal = 300000, rate = 1.5, years = 15) {
  return ((principal * rate) / 100) * years;
}

// console.log(interestRate());
