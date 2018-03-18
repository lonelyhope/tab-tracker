const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  email: String,
  password: String
})
UserSchema.methods.added = function() { // (new modelInfo.model({})).added()
  console.log('Add the info succeed!')
}

const modelName = 'User'
module.exports = {
  name: modelName,
  model: mongoose.model(modelName, UserSchema)
}
