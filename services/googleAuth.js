const passport = require("passport");
const googleAuth = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const User = require("../models/authSchema");
const mongoose = require("mongoose");
passport.use(
  new googleAuth(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/user/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("PROFILE", profile);
      console.log("HERE", profile.emails[0].value);

      await User.findOne(
        { $or: [{ _id: profile.id }, { username: profile.emails[0].value }] },
        async (err, user) => {
          console.log("USER", user);
          if (user) {
            console.log("LOLOLOLOL");
            return done(null, user);
          }
          console.log("Doesnt Work");
          const newUser = await new User({
            _id: profile.id,
            username: profile.emails[0].value,
            confirmed: true
          }).save();

          return done(null, newUser);
        }
      );
    }
  )
);
