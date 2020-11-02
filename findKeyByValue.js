const assertEqual = require('./assertEqual');

const findKeyByValue = function(objectList, keyValue) {
  for (let keyName in objectList) {
    if (objectList[keyName] === keyValue) {
      return keyName;
    }
  }
};

module.exports = findKeyByValue;