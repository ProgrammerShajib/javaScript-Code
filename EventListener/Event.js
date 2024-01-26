let para = document.querySelector("h1");

para.addEventListener("mouseover",event1);

function event1(){
  para.classList.add("style-1");
}
 
para.addEventListener("mouseout",event2);

function event2(){
  para.classList.remove("style-1");
}
 