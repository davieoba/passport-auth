require('dotenv').config({ path: '.env' })
const { PORT } = process.env
const { GOOGLE_PLUS_CLIENT_ID } = process.env
const { GOOGLE_PLUS_CLIENT_SECRET } = process.env
const { MONGODB_URI } = process.env

module.exports = {
  PORT,
  GOOGLE_PLUS_CLIENT_ID,
  GOOGLE_PLUS_CLIENT_SECRET,
  MONGODB_URI
}