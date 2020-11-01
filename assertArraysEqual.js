const eqArrays = require('./eqArrays')

const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1, array2));
  if (eqArrays(array1, array2)) {
    console.log('👌These two arrays are the same!👌');
  } else {
    console.log('❗These two arrays are different!❗');
  }
};

module.exports = assertArraysEqual;