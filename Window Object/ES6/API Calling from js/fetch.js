console.clear();
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});
// .then((res)=>{
//   if(!res.ok){
//     const message = `Error : ${res.status}`
//     throw new Error(message)
//   }
//   return res.json()
// })
// .then((response) => response.json())
// // .then((res)=>console.log(res))
// .then((json)=>console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/psts?userId=1")
  
  .then((response) => {
    if(!response.ok){
      const message = `Error : ${response.status}`
      throw new Error (message);
    
    }
    return response.json();
  })
  .then((res) => console.log(res))
 .catch((err)=>console.log(err))
  // .then((json) => console.log(json));

// .then((response) => response.json())
// .then((json) => console.log(json));
