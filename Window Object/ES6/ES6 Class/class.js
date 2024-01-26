class Student{
  constructor(id,name,native){
    this.id= id;
    this.name= name;
    this.native=native
  }
  set studentName(name){
    this.name = name;
    }
   get studentInfo(){
    return this.id +"  "+ this.name
   } 
}

let s1 = new Student(1152,"Shajib Barua",'Bangla');
// console.log(s1);


 s1.studentName="Songket Barua";
console.log(s1);
console.log(s1.studentInfo);