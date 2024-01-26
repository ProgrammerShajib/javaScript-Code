// var lengthArray = prompt("Enter the array length:");
// var a = new Array(lengthArray);

// for (var i = 0; i < lengthArray; i=i+1) {

//   document.write("The Array elements: " + i + "<br>");
// }

var b = ["shajib", "barua", "songket", "sowrove"];
b.shift();
b.unshift("reto");
b.splice(1, 2);

document.write("The array element:" + b);
