//  document.querySelectorAll(".myclass")[0].
// addEventListener("click",function(){
//   var test = this.innerHTML;
//   document.querySelector("h1").innerHTML = test + " is clicked";
// });
//  document.querySelectorAll(".myclass")[1].
// addEventListener("click",function(){
//   var test = this.innerHTML;
//   document.querySelector("h1").innerHTML = test + " is clicked";
// });
//  document.querySelectorAll(".myclass")[2].
// addEventListener("click",function(){
//   var test = this.innerHTML;
//   document.querySelector("h1").innerHTML = test + " is clicked";
// });


// Other solution

let len = document.querySelectorAll(".myclass").length;
for (let i=0;i<len;i++){

  document.querySelectorAll(".myclass")[i].addEventListener("click",function(){
    var test = this.innerHTML;
    document.querySelector("h1").innerHTML = test + " is clicked";
  });
   
}
