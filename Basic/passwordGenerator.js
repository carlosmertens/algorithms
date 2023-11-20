console.log('\n********** Password Generatos **********');
// Function that generates random number
function getRandomInt(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate password
// Takes parameters, the length of the password and true or false for mixing uppercase letters every 3 other character.
function generatePassword(length = 20, mixedCase = true) {
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_';
  let newPass = '';
  const randomChar = () => charset[getRandomInt(0, charset.length - 1)];

  for (let i = 0; i < length; i++) {
    if (mixedCase) {
      if (i % 3 === 0) {
        newPass += randomChar().toUpperCase();
      } else {
        newPass += randomChar();
      }
    } else {
      newPass += randomChar();
    }
  }

  return newPass;
}
