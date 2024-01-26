// const divFirst = document.querySelector(".myProgress");
const divSecond = document.querySelector(".myBar");

const button = document.querySelector("button");

const clearButton = document.getElementById("clearButton");


button.addEventListener("click",move);
function move(){
let width = 0 ;
let id = setInterval(frame, 10);  
function frame(){
  if(width==100){
    clearInterval(id);
    id= undefined;
 
  }

  else{
    width++;
    divSecond.style.width= width + "%";
  }
}

}

clearButton.addEventListener("click",clearAnimation);
function clearAnimation() {
 
  divSecond.style.width= "10%" ;
}
 