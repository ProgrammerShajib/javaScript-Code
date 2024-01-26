arr= [23,4,556,7,23,12]

const Index=(x)=>{
  if (x%2 ===0){
    return x;
  }
}
// const firstEvenNumber = arr.find((x)=> x%2 ===0);
// const firstEvenNumberIndex = arr.findIndex((x)=> x%2 ===0);
// const firstEvenNumberIndex2 = arr.findIndex(Index);

// console.log(firstEvenNumber);
// // console.log(firstEvenNumberIndex);
// console.log(firstEvenNumberIndex2);


const student=[
  {
    id:1152,
    name:'Shajib Barua',
    gpa: 3.67,
  },
  {
    id:1152,
    name:'Songket Barua',
    gpa: 3.50,
  },
  {
    id:1152,
    name:'Soborno Barua',
    gpa: 3.00,
  },
  {
    id:1152,
    name:'Sowrove Barua',
    gpa: 4.00,
  }
]

console.log(student.find(x=>x.gpa>3.50))
console.log(student.findIndex(x=>x.gpa>3.50))
