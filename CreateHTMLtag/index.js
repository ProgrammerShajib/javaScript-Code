  var create = document.createElement("h4");
  var write = document.createTextNode("The child After the father. Heading 1");
  create.appendChild(write);


 var  myheading = document.querySelectorAll("h1")[0];
 myheading.appendChild(create);


 var mydiv =  document.querySelectorAll("div")[0];
  var remove = document.querySelectorAll("h1")[1];
 mydiv.removeChild(remove)



//  adding child  befor the father

var childName = document.createElement("h1");
var ChildText = document.createTextNode("The child before the father. Heading 1");

childName.appendChild(ChildText);

// finding the father
var father = document.querySelectorAll("h1")[0];

// because father is under the div
mydiv.insertBefore(childName,father);

