console.log('\n********** Remove Vowels **********');
// RemoveVowels
// Algorithm to remove vowels from a string using regex or looping and concatenating

const removeVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let output = '';

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i].toLowerCase())) output += string[i];
  }
  console.log({ output });

  return string.replace(/[aeiou]/gi, '');
};

// console.log(removeVowels('table')); // "tbl"
// console.log(removeVowels('JavaScript')); // "JvScrpt"
// console.log('Result:', removeVowels('AEIOU')); // ""
// console.log(removeVowels('ABCDe')); // "BCD"
