console.log('\n********** CALCULATE DAYS ***********');
// Inplement street fight game with object and methods
// Exercise
// Create function with (startDay, endDay)
// Create a JS function that will accept startingDate and endDate as parameters in dd/mm/yyy format
// With out using the Date class and its methods this function should return the total number of days between these two dates
// function daysCalculator(startingDate, endDate)
// function must return the total number of days between them. like 8000 days
// Print those days on terminal using the console.log
////////////////////////////

function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function daysTotal(date) {
  const [day, month, year] = date.split('/').map((str) => Number(str));
  const monthsValues = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let output = day + year * 365; // Ititialize with days and years provided

  // Iterate months excluding actual month
  for (let i = 1; i < month; i++) output += monthsValues[i];

  // Iterate for leap year
  for (let i = 1; i <= year; i++) {
    if (i % 4 === 0) output += 1;
  }

  return output;
}

const daysDifference = (date1, date2) => daysTotal(date2) - daysTotal(date1);

const finalResult = daysDifference('01/01/2000', '01/11/2040');
// console.log({ finalResult });

// Test with JS Date method
const diffInMs =
  new Date('11/01/2040 00:00:00') - new Date('01/01/2000 00:00:00');
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// console.log({ diffInDays });
