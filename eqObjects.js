const assertEqual = require('./assertEqual');

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let trueCount = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        trueCount += 1;
      }
    }
    if (trueCount === array2.length) {
      return true;
    } else {
      return false;
    }
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      // console.log('key is ' + key)
      // console.log('object1[key] is ' + object1[key])
      // console.log('object2[key] is ' + object2[key])
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

  
  // else {
  //   for (let keyName in Object.keys(object1)) {
  //     if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
  //       return eqArrays(object1[keyName], object2[keyName]);
  //     } else if (object1[keyName] === object2[keyName]) {
  //       continue;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  // return true;
};

console.log(eqObjects({a: {a:1, b:2}, b: [3, 'dog', [1, 2, 3]], c: 4}, {a: {a:1, b:2}, b: [3, 'dog', [1, 2, 3]], c: 4}))