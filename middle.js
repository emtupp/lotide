const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1, array2));
  if (eqArrays(array1, array2)) {
    console.log('👌These two arrays are the same!👌');
  } else {
    console.log('❗These two arrays are different!❗');
  }
};

const middle = function(array){
  let midElement = [];
  let variable = Math.floor(array.length / 2)
  if (array.length <= 2){
    
  } else if (array.length % 2 === 0){
    midElement.push(array[variable - 1])
    midElement.push(array[variable])
  } else if (array.length % 2 !== 0){
    midElement.push(array[variable]);
  }
  return midElement;
};