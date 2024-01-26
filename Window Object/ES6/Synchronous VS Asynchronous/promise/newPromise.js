const task1 = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};

const task2 = () => {
  return new Promise((resolve, reject) => {
    reject(new Error("task 2 is not completed"));
  });
};

async function callAllTask() {
  try {
    const t1 = await task1();
    console.log(t1);

    const t2= await task2();
    console.log(t2)
  } catch (err) {
    console.log(err);
  }
}

callAllTask();
