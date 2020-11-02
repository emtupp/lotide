const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

const anArray = ["Hello", "Lighthouse", "Labs"];
tail(anArray);
assertArraysEqual(anArray, ["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(tail(anArray), ["Lighthouse", "Labs"])