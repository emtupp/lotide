// const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// const anArray = ["Hello", "Lighthouse", "Labs"];
// tail(anArray);
// assertArraysEqual(anArray, ["Hello", "Lighthouse", "Labs"]);
// assertArraysEqual(tail(anArray), ["Lighthouse", "Labs"])

const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 'Lighthouse', 'Labs' for 'Hello', 'Lighthouse', 'Labs'", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns '2, 3, 4' for '1, 2, 3, 4'", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4])
  });
});