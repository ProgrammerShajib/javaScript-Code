  var count=0;
  
 document.querySelector("textarea").addEventListener("keypress",function(event){
    var text = event.key;
    count++;
    document.querySelector("p").innerHTML= "YOU have pressed  "+ count; 

  })

  // or you can simply write
  // var count=0;
  
  // addEventListener("keypress",function(event){
  //   var text = event.key;
  //   count++;
  //   document.querySelector("p").innerHTML= "YOU have pressed  "+ count; 

  // })