const express = require("express");
const path = require("path"); 
const app = express();
const multer = require("multer");

const store=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

let upload=multer({
    storage:store
}).single("img")
app.get("/", (req, res) => {
    const indexPath = path.resolve(__dirname, "index.html");
    res.sendFile(indexPath);
});


app.post('/profile', upload, function (req, res, next) {
    console.log(req.file)
    res.send()
  })
  

app.listen(3000, () => {
    console.log("Server is running!!");
});
