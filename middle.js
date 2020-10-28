const eqArrays = function(array1, array2) {
  let trueCount = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2 [i]) {
      trueCount += 1;
    }
  }
  if (trueCount === array2.length) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2){
  console.log(eqArrays(array1, array2));
  if (eqArrays(array1, array2)){
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
}