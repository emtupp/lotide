const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);  //false

const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
});