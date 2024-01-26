"use strict"
x = 20
console.log(x);
var x =10;

// default parameter
function message(text ="Hello moto"){
  console.log(`${text}`);
}

message();

message("I love you ma.");


// long parameter
function sum(x,y,...z){
  console.log(`x = ${x} y = ${y} z = ${z}`);

  const allValues = [x,y,...z];
  console.log(allValues);

  var sum = 0;
   for (let i =0 ;i<allValues.length;i++){
    sum = sum + allValues[i];
   }
console.log(`sum = ${sum}`);
}

sum(3,4,5,4 ,4,3,4,9,97,5,5,4,3);