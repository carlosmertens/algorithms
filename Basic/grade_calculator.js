console.log('\n********** Calculate Grade **********');
// ***** Function that calculates the grade of a studend in letters
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [90, 80, 100];
// console.log(calculateGrade(marks));

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
