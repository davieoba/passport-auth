const router = require('express').Router()
const { checkCookie } = require('../utils/middleware')


router.get('/user', checkCookie, (req, res, next) => {
  console.log('you were able to get the user')
  res.status(200).json({
    user: req.user
  })
})

module.exports = router