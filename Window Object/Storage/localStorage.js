
// Set item 
// localStorage.setItem("userName", "Shajib Barua");
// localStorage.setItem("Password", "01243587348973");

// set String
 const countries = ['Bangladesh','india',"pakistan","Nepal"]
// localStorage.setItem   ("countriesName",JSON.stringify(countries) );
localStorage.setItem("countriesName",JSON.stringify(countries))

const countryName = JSON.parse(localStorage.getItem("countriesName"))
localStorage.removeItem("countriesName")

//  const country = JSON.parse(localStorage.getItem("countriesName"));

 console.log(countryName);

 



// get item 
// const userName = localStorage.getItem("userName");
// const userPassword = localStorage.getItem("Password");
// console.log(userName);
// console.log(userPassword);
 
// localStorage.removeItem("userName", "Sowrove Barua");
// localStorage.removeItem("Password", "01243587348973");



