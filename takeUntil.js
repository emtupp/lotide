const takeUntil = function(array, callback) {
  const newArray = [];
  for (let i of array) {
    if (!callback(i)) {
      newArray.push(i);
    } else {
      break;
    }
  }
  return newArray;
};

module.exports = takeUntil;