const AuthModel = require("../model/auth.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

function passportConfig(passport, LocalStrategy) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async function (email, password, done) {
        const user = await AuthModel.findOne({ email });
        if (!user) {
          return done(null, false, {message:"user not exist"});
        }
        if (user.email != email) {
          return done(null, false, {message:"email not exist"});
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if(result){
            return done(null, user,{message: "login success"});
          }
          return done(null, false, {message:"wrong password"});
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    let user = await AuthModel.findById(id);
    return done(null, user);
  });
}

module.exports = passportConfig;
