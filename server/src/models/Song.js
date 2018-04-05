const mongoose = require('mongoose')

const SongsSchema = mongoose.Schema({
  title: String,
  artist: String,
  genre: String,
  album: String,
  albumImageUrl: String,
  youtubeId: String,
  lyrics: String,
  tab: String
})

SongsSchema.methods.added = function(userJson) { // (new modelInfo.model({})).added()
  console.log('Add the song succeed:' + userJson.title)
}

const modelName = 'Song'
module.exports = {
  name: modelName,
  model: mongoose.model(modelName, SongsSchema)
}
