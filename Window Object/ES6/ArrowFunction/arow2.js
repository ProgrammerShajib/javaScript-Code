
let brothers = [
  {
    name :"Shajib Barua",
    age : 23,
    gpa :4.67
  },
  {
    name :"Songket Barua",
    age : 20,
    gpa :4.50
  },
  {
    name :"Sowrove Barua",
    age : 14,
    gpa :5.00
  },
   
]


function details1(){
  return brothers.filter(function(x){
   return x.gpa>4.5;
  }).map(function(y){
    return y.name;
  })
}

// const details2=()=>{
//   return brothers.filter((x)=>x.gpa>4.5).map((y)=>y.name);
// }

const details3= ()=>brothers.filter((x)=>x.age<20).map((y)=>y.name);
console.log(details3());
// console.log(details2());

