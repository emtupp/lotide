const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let trueCount = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        trueCount += 1;
      }
    }
    if (trueCount === array2.length) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = eqArrays;