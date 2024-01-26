
// Dom events
// video Audio event 
// event type :canplay ,play,pause,playing,ended,volumechange,wating,progress


const video = document.querySelector('video');

video.addEventListener("canplay",function(){
  console.log("canplay")
})
video.addEventListener("play",function(){
  console.log("play")
})
video.addEventListener("pause",function(){
  console.log("pause")
})
video.addEventListener("playing",function(){
  console.log("playing")
})
video.addEventListener("ended",function(){
  console.log("Thank you for watchhing the video.")
})
video.addEventListener("volumechange",function(){
  console.log("volume has changed.")
})
video.addEventListener("wating",function(){
  console.log("watting.")
})