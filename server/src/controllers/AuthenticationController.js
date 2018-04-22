const {User} = require('../models') // require the User model and use the User model
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

function errHanding (err, res) {
  console.log('get error when register or login:' + err)
  res.status(500).send({error: 'Sorry there are some error.'})
}

module.exports = {
// realize the function of register, which get the register req and check it and save it to the db
  removeDb () {
    User.remove({}, err => {
      if (err) {
        console.log('remove the user fail')
      } else {
        console.log('remove the user db')
      }
    })
  },

  async register (req, res) {
    User.find({'email': req.body.email}, (err, result) => {
      if (err) {
        errHanding(err, res)
      } else {
        if (result.length) {
          console.log(result)
          console.log('the email has been used.')
          res.status(400).send({error: 'The email has been used.'})
        } else {
          const user = new User(req.body) // 将客户端发来的数据存入数据库
          user.save((err, user) => {
            if (err) {
              res.status(400).send({
                error: 'There is some wrong when save the user infomation.'
              })
            } else {
              let userJson = user.toJSON()
              user.added(userJson)
              res.send({
                user: userJson,
                token: jwtSignUser(userJson)
              })
            }
          })
        }
      }
    })
  },

  async login (req, res) {
    User.findOne({
      'email': req.body.email
    }, (err, user) => {
      if (err) {
        errHanding(err, res)
      } else {
        if (!user) {
          console.log('A invalid user want to login')
          res.status(403).send({
            error: 'The email has not been used.'
          })
        } else if (user.compare(req.body.password)) {
          res.send({
            user: user.toJSON(),
            token: jwtSignUser(user.toJSON())
          })
        } else {
          res.status(403).send({
            error: 'Wrong password.'
          })
        }
      }
    })
  }
}
