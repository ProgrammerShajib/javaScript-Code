const button = document.querySelector("button");

const para1 = document.querySelector(".para1");

// button.addEventListener("click",function(){
//   para1.innerHTML = "User registration successful .";
//   setTimeout(() => {
//     para1.innerHTML = "";
//   },2000);
// });

// const h1 = document.createElement("h1");

// // const p1 = "You have to be successfull";

// const text = document.createTextNode("You have to be successfull");
// h1.appendChild(text);
// document.body.appendChild(h1);


// interval function
// button.addEventListener("click", time);



// function time(){
//   let count = 1;
//   para1.textContent = count;
//   setInterval(()=>{
//     count++;
//     para1.textContent= count;
//   },1000);

// }

// button.addEventListener("click", startclock);
// function startclock() {
//   let date = new Date();
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds();

  // para1.innerHTML = hours + " : " + minutes + " : " + seconds;
  // const p2 = date.toLocaleString;

//   const fulldate = document.createElement("p");
//   fulldate.innerHTML = date.toLocaleString();
//   para1.appendChild(fulldate);


//   const p2 = document.createElement("p");
//   p2.innerHTML = date.toLocaleTimeString();
//   para1.appendChild(p2);


//   setInterval(startclock, 1000);
// };

//  p2 = document.createElement("p")

button.addEventListener("click", startClock);

function startClock() {
  updateClock(); // Call the function once to set the initial clock values

  // Set up an interval to update the clock every second
  setInterval(updateClock, 1000);
}

function updateClock() {
  const date = new Date();

  // Create a new paragraph element for the full date and time
  const fulldate = document.createElement("p");
  fulldate.innerHTML = "Full Time: " + date.toLocaleTimeString();
  para1.innerHTML = ''; // Clear the existing content before appending
  para1.appendChild(fulldate);
}
