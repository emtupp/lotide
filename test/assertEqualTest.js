const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns TRUE for '1, 1'", () => {
    assert.deepEqual(assertEqual(1, 1), true);
  });
});