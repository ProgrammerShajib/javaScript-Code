// KeyboardEvent Object
// keydown- pressing a key can repeat
// keypress - (may not supported by some browser)
// keyup 
// some properties - key keyCode,code, shiftKey,ctlkey, repeat


const textarea = document.querySelector('textarea');
// textarea.addEventListener("keydown",function(e){
//   alert("Do not repeat !")
//   console.log('keydwon');
// });
// textarea.addEventListener("keypress",function(){
//   console.log('keypress');
// });
// textarea.addEventListener("keyup",function(e){
//   console.log("You just press : "+e.key);
//   console.log("You just press : "+e.code);
//   console.log("Asci value of ("+ e.key + ") is : " +e.keyCode);
//   console.log('keyup');
// });

// textarea.addEventListener("keyup",function(e){
//   // console.log(e.shiftKey);
//   if(e.shiftKey){
//     console.log("shift + "+ e.key);
//   }
// })
// textarea.addEventListener("keydown",function(e){
//   if (e.ctrlKey){
//     console.log("control + "+ e.key);
//   }
// })