const without = function(source, itemsToRemove) {
  let cleanedArray = [...source];
  for (let i = 0; i < cleanedArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (cleanedArray[i] === itemsToRemove[j]) {
        cleanedArray.splice(i, 1);
      }
    }
  }
  console.log(cleanedArray);
};

module.exports = without;