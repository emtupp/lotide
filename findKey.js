const assertEqual = require('./assertEqual');

const findKey = function(objects, callback) {
  for (let item in objects) {
    if (callback(objects[item])) {
      return console.log(item);
    }
  }
};

module.exports = findKey;