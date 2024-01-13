const http = require("http");

function hello(){
   fetch("http://localhost:3000/",{method:"GET"
}).then((res)=>{
    return res.json();
   }).then((res)=>{
    console.log(res); 
   }).catch((err)=>{
    console.log(err)
   })
}

hello()

console.log("first");
