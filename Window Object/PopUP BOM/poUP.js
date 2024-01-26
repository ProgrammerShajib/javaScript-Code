

// popup boxes -alert ,confrim, prompt 

// alert("Error here");
// confirm("Are you sure?");

// function deleteSomthing(){
//   let value = confirm("Do you want to delete ?");

//   if (value){
//     console.log("You have deleted successfully.");
//   }
//   else{
//     console.log("Not deleted .");
//   }
// }

// deleteSomthing();
// let value = confirm("Do you want to delete ?");

//   if (value){
//     console.log("You have deleted successfully.");
//   }
//   else{
//     console.log("Not deleted .");
//   }

let h1 = document.createElement("h1");
let text;
let name = prompt("Enter your name : ");

if(name == null || name ==""){
  text = "No name found";
}
else {
  text = "Hello " + name;

}
let textNOde = document.createTextNode(text);
h1.appendChild(textNOde);
document.body.appendChild(h1);
