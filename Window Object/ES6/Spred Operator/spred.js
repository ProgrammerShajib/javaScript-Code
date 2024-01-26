// spred Operator


// in the function (...z) is a rest operator it only used in the end 
// function addNumber(x,y,...z){
// return x+y+z;
// }

// let arr = [1,2,3,4];
// console.log(addNumber(arr[0],arr[1],arr[2],arr[3]));

// here (...arr) is a spred operator . it can used in any position in the array.and allow to send full array element in once.
// console.log(addNumber(...arr));

// concat in the middle... using the spred  operator

  let number1 = [1,2,3,4];
  let number2 = [5,6,7,8,9,10];

  // using concat operator for concat the array 

  console.log(number1.concat(number2));

  // concat the number1 and number2 using the spred operator

  // console.log(1,2,3,...number1,...number2);
  // console.log(1,2,3,...number1,89,34,54,23,23)

//   let number1 = [1,2,3,4];
//   let number2 = [5,6,7,8,9,10];

//   // concat the number1 and number2 using the spred operator

//   console.log(...number1,...number2)

let p1 = {
  name : "Shajib barua",
  age :23
}
let p2 = {
  nationality: "Bangladesh",
  occupation : "Teacher"
}
let p = {...p1,...p2};
// console.log(...p1,...p2);
console.log(p);