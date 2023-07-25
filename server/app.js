const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const { MONGODB_URI } = require('./utils/config')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log(`Connected successfully to DB`)
  }).catch((err) => {
    console.log('Error connecting to the DB', err)
  })

module.exports = app