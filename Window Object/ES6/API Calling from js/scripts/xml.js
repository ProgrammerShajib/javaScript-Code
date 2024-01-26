console.clear();

// Event : onload() onerror()
// property: response ,responseText, resposnseUrl,resposnseType ,status, statusText
// function : open(),send() ,setRequestHeader()

const MakeRequest = (Methode,url,data)=>{
   return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(Methode,url)
  
    xhr.setRequestHeader('Content-type', 'application/json')
    // onload event process data for showing data in console
    xhr.onload = () => {
      
      let data = xhr.response;  // taking all data from the API BUT it show in JSON FORMATE
      // console.log(xhr.responseType);
      // console.log(xhr.responseURL);
      // console.log(xhr.responseText);
      // console.log(xhr.status);
      // console.log(xhr.statusText);
      // console.log(data);
      // convert the JASON data in javascript Object
      console.log(JSON.parse(data));
    };
    
    // handling error
    xhr.onerror = () => {
      console.log("error is here");
    };
    xhr.send(JSON.stringify(data));
   })

}



const getData = () => {
  MakeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
  .then((res)=>console.log(res))
  
};
getData();

// const sendData = () => {
//   MakeRequest("POST", "https://jsonplaceholder.typicode.com/posts",{
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   });
// };
// const updateData = () => {
//   MakeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1",{
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   });
// };
// const singleUpdateData = () => {
//   MakeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1",{
     
//     title: 'fooMA',
//     body: 'barMA',
    
//   });
// };
// const deleteData = () => {
//   MakeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1"),{
//     mathod: 'DELETE'
//   };
// };
// updateData();
// sendData();
// getData();

// singleUpdateData()
// deleteData();

