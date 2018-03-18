const {User} = require('../models') //require the User model and use the User model 

module.exports = {
// realize the function of register, which get the register req and check it and save it to the db
  async register (req, res) {
    User.find({'email':req.body.email}, (err, result) => {
      if (err) {
        res.status(400).send('Sorry there are some error.');
      } else {
        if (result) {
          console.log('the email has been used.')
          res.status(400).send('The email has been used.');
        } else {
          const user = new User(req.body) // 将客户端发来的数据存入数据库
          user.save((err, user) => {
            if (err) {
              res.status(400).send({
                error: 'There is some wrong when save the user infomation.'
              })
            } else {
              user.added()
              res.send(user.toJSON())
            }
          })
        }
      }
    })
  }
}
