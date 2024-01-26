


var  image = ["images/1.avif","images/2.jpg", "images/3.jpg", "images/4.jpg"];
let imgtag = document.querySelector("img");

let count = 0;

function next(){
  count++;
  if (count >= image.length) {
    count = 0;
    imgtag.src = image[count];

  }
  else {
    imgtag.src = image[count];
  }
  
}
function prev() {
  count--;
  if (count < 0) {
    count = image.length -1 ;
    imgtag.src = image[count];

  }
  else {
    imgtag.src = image[count];
  }

}