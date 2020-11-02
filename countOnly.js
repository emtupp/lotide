const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let answer = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (answer[item]) {
        answer[item]++;
      } else {
        answer[item] = 1;
      }
    }
  }
  return answer;
};