const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { connection } = require("./config/db");
require("dotenv").config();
const { router: AuthRouter } = require("./routes/auth.routes");
const passport = require("passport");
const localPasasport = require("./auth");
const local = require("./auth");
const { AuthModel } = require("./Model/auth.model");

app.use(express.json());



app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
local(passport)
app.use(passport.initialize());
app.use(passport.session());



app.post('/login',passport.authenticate("local"),
  function(req, res) {
    console.log(req.body);
    res.send("<h1>Hello World</h1>");
});

app.post("/signup",async(req,res)=>{
  let data=await AuthModel.create(req.body)
  res.send(data)

})

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`DB is connected`);
    console.log(`server is running at ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
