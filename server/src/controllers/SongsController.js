const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    var findInfo = {title:{$exists:true}}
    const search = req.query.search
    if (search) {
      console.log('search')
      findInfo = {
        $or : [ //多条件，数组
          {title : {$regex : search}},
          {artist : {$regex : search}}
        ]
      }
    }
    Song.
      find(findInfo).
      limit(10).
      exec((err, song) => {
        if (err) {
          console.log('There is an error when find songs:' + err)
          res.status(500).send({error: 'server error'})
          return;
        }
        console.log(song.length)
        res.send(song)
      })
  },
  async post (req, res) {
    const song = new Song(req.body)
    song.save((err, song) => {
      if (err) {
        console.log('There is an error when saving a song: ' + err);
        res.status(500).send({err: err})
        return
      }
      console.log('save a song: ' + JSON.stringify(song))
      res.send(song)
    })
  },
  async show (req, res) {
    Song
      .findOne({_id: req.params.songId})
      .exec((err, song) => {
        if (err) {
          console.log(`error when trying to find a song of id ${req.params.songId}:${err}`)
          res.status.send({error: 'error when trying to find a song of id'})
          return
        }
        console.log(`song ID: ${req.params.songId}, ${song.title}`)
        console.log(song)
        res.send(song)
      })
  },
  async put (req, res) {
    console.log('request to put\n')
    try {
      const newSong = new Song(req.body)
      Song.update(
        {_id: req.params.songId},
        {$set: newSong},
        (err) => {
          if (err) {
            console.log('update error: ' + err)
            res.status(500).send({error: 'update error'})
          } else {
            console.log(`update success: ${req.body.title}`)
            res.send('update succeed')
          }
        })
    } catch (err) {
      console.log('err:' + err)
    }
  }
}