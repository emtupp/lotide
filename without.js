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
  if (eqArrays(array1, array2)){
    console.log('👌These two arrays are the same!👌');
  } else {
    console.log('❗These two arrays are different!❗');
  }
}

const without = function(source, itemsToRemove){
  let cleanedArray = source;
  for (let i = 0; i < cleanedArray.length; i++){
    for (let j = 0; j < itemsToRemove.length; j++){
      if (cleanedArray[i] === itemsToRemove[j]){
        cleanedArray.splice(i, 1);
      }
    }
  }
  console.log(cleanedArray);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const numbers = [1, 2, 3];

console.log(numbers)
without(numbers, [1]);
console.log(numbers)