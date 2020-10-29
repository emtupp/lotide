const letterPositions = function(sentence) {
  let lowerSentence = sentence.toLowerCase();
  let answer = {};
  for (let i in lowerSentence) {
    if (!answer[lowerSentence[i]]) {
      if (lowerSentence[i] === ' ') {
        continue;
      } else {
        answer[lowerSentence[i]] = [i];
      }
    } else {
      answer[lowerSentence[i]].push(i);
    }
  }
  return answer;
};