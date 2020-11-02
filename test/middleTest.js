// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// const anArray = [1, 2, 3, 4];
// assertArraysEqual(middle(anArray), [2, 3]);
// assertArraysEqual(anArray, [1, 2, 3, 4]);

const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});