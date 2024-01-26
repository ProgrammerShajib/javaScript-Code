document.querySelectorAll(".myAudio")[0].addEventListener("click", function () {
  
  var text = document.querySelectorAll(".myAudio")[0].innerHTML;

  var selectedButton = document.querySelector("." + text);
selectedButton.classList.add("anim");

setTimeout(function(){
  selectedButton.classList.remove("anim");
},1000)

  switch (text) {

    case "a":

      document.querySelector(".p1").innerHTML = "Shajib blog song";
      

      break;
  }
})