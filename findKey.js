const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌Assertion Passed: ${actual} === ${expected}👌`);
  } else {
    console.log(`❗Assertion Failed: ${actual} !== ${expected}❗`);
  }
};

const findKey = function(objects, callback) {
  for (let item in objects) {
    if (callback(objects[item])) {
      return console.log(item);
    }
  }
};