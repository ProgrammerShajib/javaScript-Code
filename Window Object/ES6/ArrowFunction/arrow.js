

// const message= ()=>console.log(`Hello Shajib (direct using the console.log() function )`);

const message2= ()=> `Wellcome to the coding world (without using return)`; //here in this code the arrow function return the string ;
const message3= ()=>{
  return `Wellcome to the coding world using (return)`
}; //here in this code the arrow function return the string ;

// message();
// console.log(message2());
// console.log(message3());
 

// const message5= ()=> console.log(`This is Shajib coding World.`)
// message5();

// let array = [2,3,4,5,6,3,64];
// let newarr = array.map(function(x){
//   return x*x;
// })

// console.log(newarr);

const myfunction = (x,y=10)=> x+y;
console.log(`Use 1 perameter ans is : ${myfunction(10)}`);
console.log(`Use 2 perameter ans is : ${myfunction(10,30)}`);
 