const MakeRequest = (methode,url,data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(methode,url);


  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onload=()=>{
    let data = xhr.response;
    // console.log(data);
    console.log(JSON.parse(data))
  }
  xhr.onerror=()=>{
    console.log('error is here!');
  };


  xhr.send(JSON.stringify(data));
};




const getData = () => {
  MakeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
};
// getData();


const sendData = () => {
  MakeRequest("POST", "https://jsonplaceholder.typicode.com/posts",{
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
};
// sendData();
const updateDataData = () => {
  MakeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1",{
    id:1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
};
// updateDataData();



const updateSingleData = () => {
  MakeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1",{
 
    title: 'fooMa',
    body: 'barMa',
     
  })
};
// updateSingleData();


const deleteData = () => {
  MakeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};
deleteData()
