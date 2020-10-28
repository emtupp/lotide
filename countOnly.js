const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌Assertion Passed: ${actual} === ${expected}👌`);
  } else {
    console.log(`❗Assertion Failed: ${actual} !== ${expected}❗`);
  }
};

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);