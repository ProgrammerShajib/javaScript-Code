let date = new Date();
// document.write(date);

let month = date.getMonth();
// document.write(month);
let currenthour = date.getHours();
// document.write(currenthour);

let currentminute = date.getMinutes();
// document.write(currentminute)

let currentSecond = date.getSeconds();
// document.write(currentSecond);

let currentZone= date.getTimezoneOffset();
// document.write(currentZone);




// Show the current region

const userTimeZone =  Intl.DateTimeFormat().resolvedOptions().timeZone;

// const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(userTimeZone); // This will log the user's timezone, which might contain country/region information

document.write(userTimeZone); // This will log the user's timezone, which might contain country/region information
