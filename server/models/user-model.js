const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name is required']
  },
  email: {
    type: String,
    required: [true, 'A valid email address is required']
  },
  googleId: String,
  password: {
    type: String
  }
})

module.exports = mongoose.model('User', userSchema)
