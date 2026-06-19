//asynchronous programming
// let promise=new Promise((resolve,reject)=>{
    
//     let success=false;
//     if(success)
//         resolve("Data Loaded");
//     else
        
//         reject("error occured");
// });
// promise.then(result=>console.log(result))
//.catch(error=>console.log(error));
//async and await
async function getData(){
    let  respose=await
    fetch("https://jsonplaceholder.typicode.com/users");
    let data=await Response.json();
    console.log(data);

}
getData();
