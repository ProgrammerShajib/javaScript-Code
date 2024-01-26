
// for... of
let arr = ["Shajib", "Songket", "Sowrove"]
for (let x of arr) {
  // console.log(x);
}

// for ...in  used for object 
let names = {
  s1: "Shajib",
  s2: "Songket",
  s3: "Sowrove"
}

for (let x in names) {
  // console.log(x)
  // console.log(names[x])
  // console.log(`${x} : ${names[x]}`);
}


 


// forEach is a methode for arrays not for object  so if you want to access the object through forEach you have to use Object.keys()
let names2 = {
  s1: "Shajib",
  s2: "Songket",
  s3: "Sowrove"
};

Object.keys(names2).forEach(function(key) {
  // console.log(key + ": " + names2[key]);
});






// for each loop

let number1 = [1, 2, 3, 4];
let number2 = [5, 6, 7, 8, 9, 10];

number2.forEach(function(x){
  // console.log(x);
})

// var squareNumber = [];
// console.log(`Before square = ${number1}`);
// number1.forEach(function(x){
//   squareNumber.push(x*x);
// })
// console.log(`After square = ${squareNumber}`);

// addig 5 each in the array element 
// console.log(`Before adding = ${number1}`);
//  number1.forEach(function(x,index,arr){
//   arr[index] = x+ 5;
//  })
//  console.log(`After adding (5) = ${number1}`);

// let number3 = [5, 6, 7, 8, 9, 10];
// squareArray= [];
// number3.forEach(function(x){
// squareArray.push(x*x);
// })
// console.log(squareArray);

// Use maping

// Advantage using map is don't need to declare the array and don't need to push the element .
// let number3 = [5, 6, 7, 8, 9, 10];
// let squareArray = number3.map(function(x){
// return x*x;
// })
// console.log(squareArray);



// Filter function filter the element based on a  condition and return it in a new array .
// number4 = [1,2,3,4,5, 6, 7, 8, 9, 10];
// console.log(`previous Array ${number4}`)
 
// let numbers = number4.filter(function(x){
// return x>5;
// })
// console.log(`Element that gretter than 5 are : ${numbers}`);
