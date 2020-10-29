const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌Assertion Passed: ${actual} === ${expected}👌`);
  } else {
    console.log(`❗Assertion Failed: ${actual} !== ${expected}❗`);
  }
};

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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let keyName of Object.keys(object1)) {
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
        return eqArrays(object1[keyName], object2[keyName]);
      } else if (object1[keyName] === object2[keyName]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(eqObjects({a: [1, 2], b: [], c: 4}, {a: [1, 2], b: 3, c: 4}))