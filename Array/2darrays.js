function cricketinfo(score) {
  // document.write(score);
  // console.log(score);
  let highestScore = score[0][1];
  let highestScorer = score[0][0];
  for(var x=1; x<score.length;x++){
    if(highestScore <score[x][1]){
      highestScore = score[x][1];
      highestScorer=score[x][0];
    }
  }
  return [highestScore,highestScorer];
  
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
let result = cricketinfo(scorers)
let max =  result[0];
let maxScorerName =  result[1];

 
document.write("Max Score is : "+ max + "<br>"+ "Name of the max scorer is :"+ maxScorerName);