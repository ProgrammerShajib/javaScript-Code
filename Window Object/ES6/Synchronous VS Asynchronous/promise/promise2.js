// const task1 = ()=>{
//   return new Promise((resolve,reject)=>{
//     resolve("Task1 is completed")
//   })
// }
// const task2 = ()=>{
//   return new Promise((resolve,reject)=>{
//     resolve("Task2 is completed")
//   })
// }
// const task3 = ()=>{
//   return new Promise((resolve,reject)=>{
//     resolve("Task3 is completed")
//   })
// }
// const task4 = ()=>{
//   return new Promise((resolve,reject)=>{
//     resolve("Task4 is completed")
//   })
// }


//  task1()
//  .then((res)=>console.log(res))
//  .then(task2)
//  .then((res)=>console.log(res))
//  .then(task3)
//  .then((res)=>console.log(res))
//  .then(task4)
//  .then((res)=>console.log(res))
console.log("wellcome")

const task1 = () => {
  return new Promise((reslove, reject) => {
    // reject(new Error("task1 is not completed"))
    reslove("task1 is completed")
  })
}
const task2 = () => {
  return new Promise((reslove, reject) => {
    reslove("task2 is completed")
  })
}
const task3 = () => {
  return new Promise((reslove, reject) => {
    reject("task3 is not completed")
  })
}
const task4 = () => {
  return new Promise((reslove, reject) => {
    reslove("task4 is completed")
  })
}

// task1()
// .then((res)=>{
//   console.log(res)
// })
// .then(task2)
// .then((res)=>{
//   console.log(res)
// })
// .then(task3)
// .then((res)=>{
//   console.log(res)
// })
// .then(task4)
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })




// Ulternate way of calling the function in asynchronous process
// async function callAllTask() {
//   try {

//     const t1 = await task1();
//     console.log(t1);
//     const t2 = await task2();
//     console.log(t2);
//     const t3 = await task3();
//     console.log(t3);
//     const t4 = await task4();
//     console.log(t4);
//   }
//   catch (err) {
//     console.log(err )
//   }
// }
// callAllTask();


async function callalltask(){
  const t1 = await task1();
  console.log(t1);
}
callalltask()