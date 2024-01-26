const canvas = document.querySelector("#mycanvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10,10,380,280)

// ctx.fillStyle = "green";
ctx.fillRect(12,12,377,276);
ctx.stroke();

var centerX = canvas.width /2;
var centerY = canvas.height /2;


ctx.beginPath()


ctx.arc(centerX,centerY,50,0,2*Math.PI,false); 
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

