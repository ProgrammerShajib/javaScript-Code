// array destructure
let numbers = [12,23,54,65,67,78]
let [num1,num2,num3,num4,...num] = numbers; //destructure the array numbers[]
// console.log(num);


// swaping the value using destructure
let a = 10,b=23;
[a,b]=[b,a];
// console.log(b)
// console.log(a)



//Object destruction
const studentsInfo= {
  id:1152,
  name:'Shajib Barua',
  gpa: 3.50,
  languages:{
    native :'bangla',
    beginner: 'English ,Hindi'
 
  }
}

const {id,name,languages}=studentsInfo;

// console.log(id);
// console.log(name);
// console.log(languages);
// console.log(languages.beginner)


// destruction function parameter


const studentsInfo2=({id,name,gpa})=>{
console.log(id);
console.log(name);
console.log(gpa);
}

const student={
  id:1152,
  name:'Shajib Barua',
  gpa: 3.50
}

studentsInfo2(student)