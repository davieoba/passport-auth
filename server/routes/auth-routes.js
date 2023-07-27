const passport = require('passport')
const { checkCookie } = require('../utils/middleware')
const router = require('express').Router()

router.get('/', (req, res, user) => {
  console.log(req.cookies)
  console.log(req.user)
  res.send(req.cookies)
})

router.get('/check-cookie', checkCookie, (req, res, next) => {
  res.send('protected route accessible')
})

const sign_in_with_google = (req, res, next) => {
  passport.authenticate('google', {
    scope: ['openid', 'profile', 'email'],
    session: true
  })(req, res, next)

}  

router.get('/google', sign_in_with_google)

router.get('/google/redirect', sign_in_with_google, async (req, res, next) => {
  const expirationDate = new Date(Date.now() + 60 * 60 * 1000)

  // console.log({ expirationDate })
  console.log('req.user', req.user)

  res.cookie('token', 'some-cookie-very-serious-data', { secure: false, httpOnly: false, expires: expirationDate })

  res.end()
})

module.exports = router