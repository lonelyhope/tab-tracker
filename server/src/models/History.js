const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HistorySchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    songId: {
      type: Schema.Types.ObjectId,
      ref: 'Song'
    }
  },
  {
    timestamps: true
  }
)

HistorySchema.methods.added = function (userJson) { // (new modelInfo.model({})).added()
  console.log('Add the history succeed:' + userJson.title)
}

const modelName = 'History'
module.exports = {
  name: modelName,
  model: mongoose.model(modelName, HistorySchema)
}
