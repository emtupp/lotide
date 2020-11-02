const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else if (!eqArrays(Object.keys(object1), Object.keys(object2))) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects;

// could be improved by adding recursion if input is nested array