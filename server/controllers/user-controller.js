const bcrypt = require('bcryptjs')
const User = require('../models/user-model')
const catchAsync = require('../utils/catchAsync')
const crypto = require('crypto')
const Email = require('../utils/emails/Email')

exports.register = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10)
  })

  if (!user) throw new Error('Error creating user')

  next()
})

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) throw new Error('Email and Password required')

  next()
})

// post request
exports.forgotPassword = catchAsync(async (req, res, next) => {
  const email = req.body.email

  const user = await User.findOne({ email: email })

  if (!user) res.status(404).json({ message: 'No user with the email found' })

  const resetToken = crypto.randomBytes(32).toString('hex')
  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex')

  const expiryDate = new Date()
  expiryDate.setMinutes(expiryDate.getMinutes() + 10)

  user.resetToken = hashedToken
  user.passwordResetExpire = expiryDate
  await user.save({ validateBeforeSave: false })

  const resetLink = `${req.protocol}://${req.get('host')}/auth/reset-password/${resetToken}`

  try {
    const data = await new Email().resetpasswordEmail(resetLink, user.name, 'Reset password', user.email)

    console.log({ data })

    res.status(200).json({
      message: 'Email sent successfully',
      data: data
    })
  } catch (err) {
    res.status(400).json({
      message: 'Error sending mail',
      data: err
    })
  }
})

