const express = require("express");
let app = express()
const fs = require("fs")


app.get("/create",(req,res)=>{
   fs.writeFileSync("./file.txt","hello world\n")
   res.json("file created successfully")
})


app.get("/read",(req,res)=>{
   let ans =  fs.readFileSync("./file.txt","utf-8")
   console.log("ans", ans);
   res.send("file readed successfully")
})

app.get("/update",(req,res)=>{
    let ans =  fs.readFileSync("./file.txt","utf-8")
    ans = ans.split("\n")
    ans[0] = "World Hello"
    fs.writeFileSync("./file.txt", ans.join("\n"))
    console.log(ans)
    res.send("file updated successfully")
 })


 app.get("/rmv",(req,res)=>{
    fs.read
    res.send("file updated successfully")
 })


app.listen(3000,()=>{
    console.log("server is running")
})