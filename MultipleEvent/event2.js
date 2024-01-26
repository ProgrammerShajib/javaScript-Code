
var text = document.querySelector("h1").innerHTML;
document.querySelectorAll(".myclass")[0].addEventListener("mouseover", function(){
  document.querySelector("h1").innerHTML = this.innerHTML + " is clicked";
});

document.querySelectorAll(".myclass")[0].addEventListener("mouseout", function() {

 
  document.querySelector("h1").innerHTML= text;
})
