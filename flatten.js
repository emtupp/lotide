const assertArraysEqual = require('./assertArraysEqual');

const flattenedArr = [];

const flatten = function(arr) {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      flattenedArr.push(element);
    }
  });
  return flattenedArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;