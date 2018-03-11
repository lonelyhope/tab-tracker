console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// get post delete put patch
app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})
app.listen(process.env.PORT || 8081)
