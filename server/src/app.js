console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// const {sequelize} = require('./models')
const {mongoose} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// 注册路由
require('./routes.js')(app)

// sequelize.sync()
//   .then(() => {
//     app.listen(config.port) // 8088 now
//     console.log(`Server started on the port ${config.port}`)
//   })
mongoose.connect(config.db.host, (err, client) => {
  if (err) console.log(err)
  else {
    console.log('connect')
    app.listen(config.port)
    console.log(`Server started on the port ${config.port}`)
  }
})
// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', () => { // Once our connection opens, our callback will be called
// })
