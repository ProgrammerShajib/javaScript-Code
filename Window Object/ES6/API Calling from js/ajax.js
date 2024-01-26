console.clear();
// console.log(window);
// const makeRequest = async (Url, method) => {
//   const result = await $.ajax({
//     url: Url,
//     method: method,
//   });
//   return result;
// };
// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET").then(
//     (res) => {
//       console.log(res);
//     }
//   );
// };

// getData();

const makeRequest = async (Url, method, data) => {
  try {
    const result = await $.ajax({
      url: Url,
      method: method,
      data: data,
    });
    return result;
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const setData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
    title: "foomaaa",
    body: "bar",
    userId: 1,
  }).then((res) => {
    console.log(res);
  });
};

setData();
// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicde.com/posts/1", "GET").then(
//     (res) => {
//       console.log(res);
//     }
//   );
// };

// getData();
