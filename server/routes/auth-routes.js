const passport = require('passport')
const router = require('express').Router()

const singinWithgoogle = (req, res, next) => {
  passport.authenticate('google', { scope: ['openid', 'profile', 'email'], session: false })(req, res, next)
}

router.get('/google', singinWithgoogle, (req, res, next) => {
  // some code
})

module.exports = router