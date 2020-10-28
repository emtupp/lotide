const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌Assertion Passed: ${actual} === ${expected}👌`);
  } else {
    console.log(`❗Assertion Failed: ${actual} !== ${expected}❗`);
  }
};

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