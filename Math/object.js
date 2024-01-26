
//Here Student is constructor becouse it start with capital letter
function Student(name,age,cgpa,lang){
this.name=name;
this.age=age;
this.cgpa=cgpa;
this.lang=lang;

//make a function in the constructor
 this.display = function(){
   document.write(this.name);
   document.write(this.age);
   document.write(this.cgpa);
   document.write(this.lang);
 }
}


//create a object name student1 
var student1 = new Student("shajib",23,3.5,["bangla","Englisg","Hindi"]);

//call the function display 
student1.display();


// var student1={
//   name :"Shajib barua",
//   age :23,
//   cgpa : 3.5,
//   lang : ["bangla","Englisg","Hindi"]

// }
// document.write(student1.name);