const letterPositions = function(sentence) {

  const results = {};

  for (let i of sentence){
    
    if (!results[i]){
      results[i] = [sentence.indexOf(i)];

    } else {
      results[i].push(sentence.indexOf(i));

    }
  }
  return results;
};

console.log(letterPositions('hello'))