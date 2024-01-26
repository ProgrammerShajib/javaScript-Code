var date = new Date();
console.log(date)
// Set the cookie with the correct expiration date format
document.cookie = "userName=Shajib Barua; expires= Wed ,10 Jan 2024 18:47:00 GMT";
// document.cookie=`name=Sowrove Barua;expires=${date} `
// Log the cookie to the console
console.log(document.cookie);