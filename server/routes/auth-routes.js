const passport = require('passport')
const router = require('express').Router()

router.get('/', (req, user) => { })

const singinWithgoogle = (req, res, next) => {
  passport.authenticate('google', { scope: ['openid', 'profile', 'email'], session: false })(req, res, next)
}

router.get('/google', singinWithgoogle, (req, res, next) => {
  // 
})

router.get('/google/redirect', (req, res, next) => {
  res.cookie('token', 'some-cookie-data', { secure: false, httpOnly: false })
  res.redirect('/')
})

module.exports = router