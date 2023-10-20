console.log('\n********** Check Speed **********');
// *****  CheckSpeed function
// Speed Limit = 70
// every 5 speed over the limit gets 1 point
// Use Math.floor()
// 12 points over the license is suspended

// checkSpeed(80);

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
