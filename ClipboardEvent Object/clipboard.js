// Clipboard Event -> oncopy,oncut , onpaste


const input  = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("copy",function(){
  p.innerHTML = "you have copied";
  console.log('you have copied');

})
input.addEventListener("cut",function(){
  p.innerHTML = "you have cut";
  console.log('you have cut');

})
input.addEventListener("paste",function(){
  p.innerHTML = "you have paste";
  console.log('you have paste');

})