 const p = document.querySelector("#para1");
 const p2 = document.querySelector("#para2");
 const div1 = document.querySelector("#div1");
 const div2 = document.querySelector("#div2");


 p.addEventListener("dragstart",function(e){
  e.dataTransfer.setData("text",e.target.id);
p2.innerHTML = "Started to drag the p element"
 });

 div2.addEventListener("dragover",function(e){
  e.preventDefault();
 });
div2.addEventListener("drop",function(e){
  const value = e.dataTransfer.getData("text");
  console.log(value);
  
  e.target.appendChild(document.getElementById(value));
  e.preventDefault();
});


 div1.addEventListener("dragover",function(e){
  e.preventDefault();
 });
div1.addEventListener("drop",function(e){
  const id = e.dataTransfer.getData("text");
  
  e.target.appendChild(document.getElementById(id));
  e.preventDefault();
});



