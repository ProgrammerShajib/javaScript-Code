var won = 0;
var lost = 0;
for (var i = 0; i < 5; i++) {

  var a = parseInt(prompt("Enter a random number 1-5"));
  var b = Math.floor(Math.random() * 5) + 1;

  if (a == b) {
    console.log("your Gess is right . Hurra ! You have won the game." + "<br>");
    won++;

  }
  else {
    console.log("Your Guess is Wrong . The number is : " + b + "<br> <br.");
    lost++
  }
}

document.write("Tottal number of won: "+ won +"<br>");
document.write("Tottal number of lost: "+ lost + "<br>");
