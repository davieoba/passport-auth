const passport = require('passport')
const { checkCookie } = require('../utils/middleware')
const { register, login, forgotPassword } = require('../controllers/user-controller')
const router = require('express').Router()
const { Resend } = require('resend')
const { resetpasswordTemplate } = require('../utils/emails/password-template')

const resend = new Resend('re_hhEuenyp_DJXxeJ8yACiCdT7FAUHzLJCR')

router.get('/', (req, res, user) => {
  console.log(req.cookies)
  console.log(req.user)
  res.send(req.cookies)
})

const sign_in_with_jwt = (req, res, next) => {
  passport.authenticate('local', { session: true }, (err, user, info) => {
    if (err) throw err
    if (!user) res.send("No User Exists")

    // console.log('sign in with jwt', user)

    req.user = user
    // console.log(req.user)

    const expirationDate = new Date(Date.now() + 60 * 60 * 1000)
    res.cookie('token', 'some-cookie-very-serious-data', { secure: true, httpOnly: true, expires: expirationDate })

    console.log(req.isAuthenticated)

    req.logIn(user, (err) => {
      if (err) throw err
      console.log(req.user)
      res.send('successfully authenticated')
    })

  })(req, res, next)
}

router.post('/register', register, sign_in_with_jwt)
router.post('/login', login, sign_in_with_jwt)

router.get('/logout', (req, res, next) => {
  req.logout()
  req.user = null
  res.redirect('/')
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
  res.cookie('token', 'some-cookie-very-serious-data', { secure: true, httpOnly: true, expires: expirationDate })

  res.end()
})

// router.get('/forgot-password', (req, res, next) => {
//   resend.emails.send({
//     from: 'Sage-Auth@resend.dev',
//     to: 'bodunrindavidbond@gmail.com',
//     subject: 'Reset Password',
//     html: resetpasswordTemplate,
//   })

//   res.status(200).json({
//     status: 'success',
//     message: 'Email sent'
//   })
// })

router.post('/forgot-password', forgotPassword)

module.exports = router