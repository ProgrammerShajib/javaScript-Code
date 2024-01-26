// FocusEvent Object


// focus did not work in 
// br , head , title , html , iframe , meta ,param ,script ,style , base , bdo 

// focus work on : onblur,onfocus,onfocusin,onfocusout



const focus1 = document.querySelector("input");
focus1.addEventListener("blur", function (e) {
  // console.log(e.target.value);
  // focus1.value = e.target.value.toUpperCase();
  focus1.value = e.target.value.toLowerCase();

});
focus1.addEventListener("focus", function (e) {

  // focus1.style.backgroundColor= "orange";
  // focus1.style.padding = "1rem";
  // console.log("focus is occured");


});
// focus1.addEventListener("focusin", function(){
//   console.log("focusin is occured");
// });
// focus1.addEventListener("focusout", function(){
//   console.log("focusout is occured");
// });