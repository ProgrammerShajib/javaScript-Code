// BOM (Browser Object Model)
// console.clear()
console.log(location);

let div = document.querySelector(".location-div");
 let p1 = div.children[0];
 p1.innerHTML = "href : " +location.href;

 let p2 = div.children[1];
 p2.innerHTML = "Host : " +location.host;
 
 let p3 = div.children[2];
 p3.innerHTML = "Host name : " +location.hostname;
 let p4 = div.children[3];
 p4.innerHTML = "protocol : " +location.protocol;
 let p5 = div.children[4];
 p5.innerHTML = "port : " +  location.port;
 const button = document.querySelector("button");
 button.addEventListener("click",function(){
  location.assign("https://www.google.com");
 })
 
// console.log(div);
// document.write(div.host);
