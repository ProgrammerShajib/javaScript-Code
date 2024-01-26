// Object literals

// function student1(name,age){
// return{
//   name :name,
//   age: age
// }
// }
// console.log(student1("Shajib Barua",23))

// it work same as the above function
// here it has an Object in the function
function student1(name,age){
return{
  name, //here we concise the object name
  age
}
}
// console.log(student1("Shajib Barua",23))

// // a function in the object 

// let message = {
//   body: function(){
// return ` Hi i am a object function`;
//   }
// }
// a function in the object 

// ijt return same as before function
let message = {
  body(){
return ` Hi i am a object function`;
  }
}
// console.log(message.body());



let message2 = {
 'body name'(){
return ` Hi i am a object function`;
  }
}
console.log(message2['body name']());






function Introduction(){
  return {
   message : `Hi i am a function Object`
  } 
}
// console.log(Introduction())
