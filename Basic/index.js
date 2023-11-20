'use strict';
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.slice(airline.indexOf('Air')));

console.log(airline.replaceAll('r', 'x'));

const firstName = 'carlos';

console.log(firstName.replace(firstName[0], firstName[0].toUpperCase()));

function padText(str = '') {
  console.log(str.padStart(10, '*'));
}

padText('carlos');
