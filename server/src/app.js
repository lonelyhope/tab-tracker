console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// get post delete put patch
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered.`
  })
})
app.listen(process.env.PORT || 8088)
