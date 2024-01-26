var audio; // Define audio variable outside the function to access it globally

var len = document.querySelectorAll(".myAudio");

for (var i = 0; i < len.length; i++) {
  document.querySelectorAll(".myAudio")[i].addEventListener("click", function () {
    var text =this.innerHTML;
    console.log(text);
    audioPlay(text);
    applyCSS(text);
  });
}


addEventListener("keypress",function(event){
  var text = event.key;
  audioPlay(text);
  applyCSS(text);
})
function audioPlay(text) {
  switch (text) {
    case "a":
      document.querySelector(".p1").innerHTML = "This is Ragalegesy";
      audio = new Audio("audio.mp3");
      audio.play();
      break;

    case "b":
      if (audio && !audio.paused) {
        audio.pause(); // Pause the audio if it's playing
      } else {
        audio = new Audio("audio.mp3");
        audio.play();
      }
      break;

    case "c":
      // audio = new Audio("audio.mp3");
      audio.play();
      break;
  }
}

function applyCSS(text){
   var selectedButton  = document.querySelector("." + text);
  selectedButton.classList.add("anim");

  setTimeout(function(){
    selectedButton.classList.remove("anim");
  },1000);
}
