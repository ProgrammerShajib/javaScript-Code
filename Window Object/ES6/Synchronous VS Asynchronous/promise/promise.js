// console.log('wellcome')

// const promise1 = new Promise((resolve,reject)=>{
//   let completedPromise = true;
//   if(completedPromise){
//     resolve('completed promise 1')
//   }
//   else {
//     reject(new Error('not completed promise 1'));
//   }
// });

// console.log(promise1);
// promise1.then((res)=>{
//   console.log(res);
// })

// .catch((err)=>{
//   console.log(err.message);
// });
// console.log('end')



//  const promise2 = new Promise((resolve,reject)=>{
//   let promisecompleted  = true;

//   if (promisecompleted){
//     resolve("promise 2 is completed");
//   }
//   else{
//     reject(new Error("not completed promise 2."))
//   }
//  })

//  promise2.then((resolve)=>{
//   console.log(resolve);
//  })
//  .catch((err)=>{
//   console.log(err)
//  })

// calling tow promise function  together in a array 

// Promise.all([promise1,promise2])
// .then(([res1,res2])=>{
//   console.log(res1,res2)
// console.log(res2)
// })



// race() function 

// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Promise 3 is completed.")
//   }, 2000)
// });
// const promise4 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve ("Promise 4 is completed")
//   },2000)
// })
 

// Promise.race([promise3, promise4]).then((res) => {
//   console.log(res);
// })

// Promise.all([promise3,promise4]).then(([res3,res4])=>{
//   console.log(res3,res4)
// })

const promise5=new Promise((resolve,reject)=>{
setTimeout(()=>{
  resolve("promise 5 is completed")
},2000)
})

const promise6 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Promise 6 is completed")
   },8000)
})

Promise.race([promise5,promise6]).then((res)=>{
  console.log(res)
})

// Promise.all([promise5,promise6]).then(([res1,res2])=>{
// console.log(res2)
// console.log(res1)
// })


const promise7 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Promise 7 is completed")
  },3000)
})


const promise8= new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Promise 8 is completed")
  },3000)
})

// Promise.race([promise7,promise8]).then((res)=>{
//   console.log(res)
  // console.log(res3)
// })