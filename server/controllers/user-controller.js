const User = require('../models/user-model')
const catchAsync = require('../utils/catchAsync')

exports.register = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  if (!user) throw new Error('Error creating user')

  // send token
})

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) throw new Error('Email and Password required')
})