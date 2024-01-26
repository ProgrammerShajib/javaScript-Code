// load,unload
// scroll ,resize,toggle

window.addEventListener("load" ,function(){
  console.log('load');
});
window.addEventListener("unload" ,function(){
  console.log('unload');
});

window.addEventListener("toggle" ,function(){
  console.log('toggled');
});
window.addEventListener("resize" ,function(){
  const width= this.window.outerHeight;
  const height = this.window.outerWidth;
  console.log("height :" + height + "width: " + width)
});

// ToggleEvent -work with details
 const details = document.querySelector('details');

 details.addEventListener('toggle',function(e){
  console.log("toggle");
  console.log(e.target.open);
 });