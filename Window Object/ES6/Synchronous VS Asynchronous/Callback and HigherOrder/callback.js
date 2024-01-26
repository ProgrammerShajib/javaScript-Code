// const square = (x) => {
//   console.log(`square of ${x} : ${x * x}`)
// }

// // const y = square;
// // y(5);

// function higherOrderFunction(num, callback) {
//   callback(num)
//   console.log(`Using callback function`)

// }

// higherOrderFunction(6, square)

let task1 = (callback) => {
  console.log(`task1`);
  callback();
}

// const dataloading = () => console.log(`task2.Data loading `);

let task2 = (callback) => {
  setTimeout(()=>{
    console.log(`task2.Data loading `)
    callback();
  },200);
}

let task3 = (callback) => {
  console.log(`task3`);
  callback();
}

let task4 = (callback) => {
  console.log(`task4`);
  callback();
}

let task5 = () => {
  console.log(`task5`);
}

task1(function f1(){
  task2(function f2(){
    task3(function f3(){
      task4(function f4(){
        task5()
      })
    })
  })
}); 
