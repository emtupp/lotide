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
}

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);