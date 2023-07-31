const bcrypt = require('bcryptjs')
const User = require('../models/user-model')
const catchAsync = require('../utils/catchAsync')

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