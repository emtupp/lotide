const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👌These two objects (${inspect(actual)} & ${inspect(expected)}) are the same!👌`);
  } else {
    console.log(`❗These two objects (${inspect(actual)} & ${inspect(expected)}) are different!❗`);
  }
};