function highestScore(score) {
  let max = scorers[0][1];
  let highestScorer = scorers[0][0]
  for (let x = 1; x < score.length; x++) {
    if (max < scorers[x][1]) {
      max = scorers[x][1];
      highestScorer = scorers[x][0];
    }

  }
return highestScorer;
}

let scorers = [
  ["Sakib", 50],
  ["Tamim", 90],
  ["Sakib", 80],
  ["Tamim", 70],
  ["Sakib", 30],
  ["Tamim", 90],
  ["Sakib", 68],
  ["Tamim", 92],

];

var name = highestScore(scorers);
document.write(name);