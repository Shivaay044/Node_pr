const express = require("express");
const AuthModel = require("../model/auth.model");
const router = express.Router();
const passport = require("passport")
const bcrypt = require("bcrypt")



router.post("/register",async(req,res)=>{
  try {
       const existUser = await AuthModel.findOne({email:req.body.email});
      
      if(existUser) return res.send("user exist");
      bcrypt.hash(req.body.password, 10,async function(err, hash) {
        if(err) return res.send(err)
        let user = await AuthModel.create({...req.body,password:hash})
        res.send(user);
      }); 
    } catch (error) {
       res.send(error)
    }
});



router.post('/login', 
passport.authenticate('local',
{
  successRedirect: '/wel',
  failureRedirect: '/err',
  failureFlash:true,
  successFlash:true
}),
function(req, res) {
  res.send("loggedIn successfully")
});




module.exports = router