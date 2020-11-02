const assertEqual = require('./assertEqual')

const countLetters = function(sentence) {
  let letterCounter = {};
  let lowerCaseSentence = sentence.toLowerCase();
  let allLetters = lowerCaseSentence.split(' ').join('');
  for (let letter of allLetters) {
    if (letterCounter[letter]) {
      letterCounter[letter]++;
    } else {
      letterCounter[letter] = 1;
    }
  }
  return letterCounter;
};