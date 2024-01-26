// console.log(window);
console.clear();

axios.get('https://jsonplaceholder.typicode.com/post')
.then((res)=>console.log(res.data))
.catch((err)=>console.log(` ${err}`))
// .catch((err)=>console.log(err))
// .then((res)=>console.log(res.status));
