const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let midElement = [];
  let variable = Math.floor(array.length / 2);
  if (array.length <= 2) {

  } else if (array.length % 2 === 0) {
    midElement.push(array[variable - 1]);
    midElement.push(array[variable]);
  } else if (array.length % 2 !== 0) {
    midElement.push(array[variable]);
  }
  return midElement;
};