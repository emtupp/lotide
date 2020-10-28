const eqArrays = function(array1, array2) {
  let trueCount = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2 [i]) {
      trueCount += 1;
    }
  }
  if (trueCount === array2.length) {
    console.log(true);
  } else {
    console.log(false);
  }
};