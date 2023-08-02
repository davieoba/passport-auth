const app = require('./app')

app.listen(5000, () => {
  console.log(`
application started on port 5000 🚀
  `)
})

process.on('uncaughtException', function (err) {
  console.log(err)
  process.exit()
})