function highestScore() {
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

  const sortedArray = scorers.sort(function (a, b) {
    return b[1] - a[1];
  });

  const highestScorers = [];
  const highestScore = sortedArray[0][1];

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i][1] === highestScore) {
      highestScorers.push(sortedArray[i][0]);
    } else {
      break; // Since the array is sorted, we can stop once a lower score is encountered
    }
  }

  const textElement = document.querySelector("#text");
  if (textElement) {
    textElement.innerHTML = highestScorers.join(", ");
  } else {
    console.error("Element with ID 'text' not found.");
  }
}
