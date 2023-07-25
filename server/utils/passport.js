const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const config = require('./config')

passport.use(new GoogleStrategy({
  callbackURL: '',
  clientID: config.GOOGLE_PLUS_CLIENT_ID,
  clientSecret: config.GOOGLE_PLUS_CLIENT_SECRET
}, async function (accessToken, refreshToken, profile, done) {
  // const user = await User.findOne({googleId: profile.id})
}))