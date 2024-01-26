function Teacher(name ,age,subject,lang){
this.name = name;
this.age = age;
this.subject = subject;
this.lang = lang;

this.display = function(){
 document.write("Name : "+this.name+ "<br>");
 document.write("Age : "+this.age+ "<br>");
 document.write("Subject : "+this.subject + "<br>");
 document.write("Language : "+this.lang);

}
}

var student1 = new Teacher("shajib",23,["math"],["bangla","Englisg","Hindi"]);

student1.display();

//this is an object
// var Teacher1 =  {
//   name :"Shajib",
//   age: 23,
//   subject : ["Bangla","English"],
//   lang:["Bangla" ,"english"]
  
// }
// document.write(Teacher1.name);

