let task1 = (callback) => {
  console.log(`task1`);
  callback();
}
const dataloading = (callback) => {
  console.log(`task2.dataloading `)
  callback()
}

//it is a Asynchronous function
let task2 = (callback) => {
  setTimeout(() => dataloading(callback), 2000);

}
let task3 = (callback) => {
  console.log(`task3`)
  callback()
}
let task4 = (callback4) => {
  console.log(`task4`)
  callback4()
}
let task5 = (callback5) => {
  console.log(`task5`)
  callback5()
}
let task6 = () => {
  console.log(`task6`)
 }

// nested callback function

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          task6()
        })
      })
    })
  })
})