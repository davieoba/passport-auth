require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const AuthRoutes = require('./routes/auth-routes')
require('./utils/passport')
const { MONGODB_URI, SESSION_KEY } = require('./utils/config')
const passport = require('passport')

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log(`🚀🚀 Connected to MongoDB 🚀`)
  }).catch((err) => {
    console.log('😞❗ Error connecting to MongoDB', err)
  })

app.use(express.static(path.join(__dirname, 'dist')))

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(cookieSession({
  maxAge: 60 * 60 * 1000,
  expires: 60 * 60 * 1000,
  keys: [SESSION_KEY]
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/api/v1/auth', AuthRoutes)

module.exports = app