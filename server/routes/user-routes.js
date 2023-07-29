const router = require('express').Router()
const User = require('../models/user-model')
const { checkCookie, restrictedRole } = require('../utils/middleware')

router.get('/user', checkCookie, (req, res, next) => {
  console.log('the user', req.user)
  console.log('you were able to get the user')
  res.status(200).json({
    user: req.user,
    redirectUrl: '/'
  })
})

router.get('/users/info', checkCookie, restrictedRole, async (req, res, next) => {
  const users = await User.find({})

  res.status(200).json({
    message: 'success',
    data: {
      users
    }
  })
})

module.exports = router