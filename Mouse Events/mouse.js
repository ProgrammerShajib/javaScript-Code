/* the mouse event didn't work in  */
/* MouseEvent - <html>,<head>,<meta>,<title>,<br>,<style>,<iframe>,<param>,<base>,<bdo>



onclick
ondblclick
onmousedup
onmousedown
onmousedup
onmouseenter
onmouseleave
onmousemove
onmouseover */
console.clear();

const div = document.querySelector("div");

// more about click
// div.addEventListener("click", function(e){
//   // console.log("click is occurred");
//   console.log("id = "+e.target.id);
//   console.log("className = "+ e.target.className);
//   console.log("innerText = "+ e.target.innerText);
//   console.log("innerHTML = "+ (e.target.innerHTML="shajib"));
//   console.log("textContent = "+ (e.target.textContent="Hello i am shajib"));
//   console.log("innerText = "+ e.target.innerText);
//   console.log("innerHTML = "+ (e.target.innerHTML));
// });

div.addEventListener("dblclick", function(){
  console.log("dblclick is occurred");
});

// div.addEventListener("mousedown", function(){
//   console.log("mousedown is occurred");
//   div.style.color = "blue";
// });

// div.addEventListener("mouseup", function(){
//   console.log("mouseup is occurred");
//   div.style.color = "red";
// });
// div.addEvent 
// div.addEventListener("mouseover", function(){
//   console.log("mouseover is occurred");
//   div.style.color = "red";
// });
// div.addEventListener("mousemove", function(){
//   console.log("mousemove is occurred");
//   div.style.color = "blue";
// });

// more on mousemove
// div.addEventListener("mousemove", function(e){
// clientX,clientY will show the value by the whole window

  // console.log("clientX = " + e.clientX + " ," + "clientY = " + e.clientY);

  // offsetX and offsetY will show the value by the element area

//   console.log("offsetX = " + e.offsetX + " ," + "offsetY = " + e.offsetY);
//   div.style.color = "blue";
// });


// more on click in button maping
// const buttons = document.querySelectorAll(".btn");
// console.log(buttons)
// const arr = Array.from(buttons);
// console.log(arr);

// arr.map((element)=>{
//   console.log(element.innerHTML);
// })


// advance use mapping in click events
// Array.from(buttons).map((button)=>{
//   button.addEventListener("click",function(e){
// const innerHTML = console.log(e.target.innerHTML);
// const btn = document.querySelector(".p");
// console.log("innerHTML = "+(btn.innerHTML= "i am " + e.target.innerHTML));
//   });
// });