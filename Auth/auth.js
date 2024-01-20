// const passport = require("passport");

const { AuthModel } = require("./Model/auth.model");

const LocalStrategy = require("passport-local").Strategy;

const local = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        let user = await AuthModel.findOne({ username });
        if (!user) {
          return done(null, false);
        }
        if (user.password != password) {
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {}
    })
  );

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    let user = await AuthModel.findById(id);
    return done(null, user);
  });
};

module.exports = local;
