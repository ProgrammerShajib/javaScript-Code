let task1 = () => {
  console.log(`task1`)
}
const dataloading = () => console.log(`task2.dataloading `) //it is a Asynchronous function
let task2 = () => {
  setTimeout(dataloading, 2000);
}
let task3 = () => {
  console.log(`task3`)
}
let task4 = () => {
  console.log(`task4`)
}
let task5 = () => {
  console.log(`task5`)
}

task1()
task2()
task3()
task4()
task5()