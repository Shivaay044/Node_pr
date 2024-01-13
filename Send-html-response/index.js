const http = require("http");
const fs = require("fs");



const server = http.createServer((req,res)=>{
   if(req.url=="/html"){
      const data = fs.readFileSync("./index.html","utf-8")
      res.end(data);
   }
})



server.listen(3000,()=>{
    console.log("server is running!!");
})