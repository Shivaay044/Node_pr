const express = require("express");
const connection = require("./config/db");
const app = express();
const router = require("./routes/auth.routes");
const passport = require("passport");
const passportConfig = require("./config/passport");
const flash = require("connect-flash");
var jwt = require('jsonwebtoken');
const LocalStrategy = require("passport-local").Strategy
require("dotenv").config();


app.set('view engine', "ejs");
app.set("views",__dirname+"/views")
app.use(express.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
passportConfig(passport, LocalStrategy)


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.messages = req.flash();
  next();
});

app.use("/auth",router);

app.get("/",(req,res)=>{
  req.flash("success","hello reqister page")
  res.render("register")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/wel", (req, res) => {
  res.render("welcome", { message: req.flash('success') });
});

app.get("/err",(req,res)=>{
  res.render("err")
})

app.get("/logout",(req,res)=>{
  res.render("logout")
})







app.listen(process.env.PORT,async()=>{
    try {
       await connection
       console.log(`DB is connected`);
       console.log(`Server is running at ${process.env.PORT}`);
    } catch (error) {
       console.log(error)
    }
})