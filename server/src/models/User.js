const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    set: (pass) => {
      var hash = bcrypt.hashSync(pass, 10)
      console.log('hash the password: ' + pass + ' -> ' + hash)
      return hash
    }
  },
  bookmark: [{ type: Schema.Types.ObjectId, ref: 'Song' }]
})

UserSchema.methods.added = function (userJson) { // (new modelInfo.model({})).added()
  console.log('Add the info succeed:' + JSON.stringify(userJson))
}
UserSchema.methods.compare = function (password) {
  return bcrypt.compareSync(password, this.password)
}

const modelName = 'User'
module.exports = {
  name: modelName,
  model: mongoose.model(modelName, UserSchema)
}
