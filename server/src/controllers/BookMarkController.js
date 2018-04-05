const {User} = require('../models')

module.exports = {
  // 添加收藏
  async add (req, res) {
    const {email, songId} = req.query
    console.log(`bookmark-add: ${email}, ${songId}`)
    try {
      let user = await User.findOne({email: email})
      if (!user) return
      user.bookmark.push(songId)
      await user.save()
      res.send({
        user: user,
        done: true
      })
      console.log(`add bookmark success: ${JSON.stringify(user.toJSON())}`)
    } catch (err) {
      console.log('error when bookmark: ' + err)
    }
  },

  // 删除收藏
  async delete (req, res) {
    const {email, songId} = req.query
    console.log(`bookmark-delete: ${email}, ${songId}`)
    try {
      let user = await User.findOne({email: email})
      if (!user) return
      let relatedSongs = user.bookmark
      let find = false
      for (let i = 0; i < relatedSongs.length; i++) {
        if (relatedSongs[i] == songId) {
          user.bookmark.splice(i, 1)
          find = true
          break
        }
      }
      if (!find) return
      await user.save()
      console.log(`delete bookmark success: ${JSON.stringify(user.toJSON())}`)
      res.send({
        done: true,
        user: user
      })
    } catch (err) {
      console.log('unbookmark error: ' + err)
      res.status(500).send({error: 'error when unbookmark'})
    }
  },

  // 查询是否收藏
  async query (req, res) {
    const {email, songId} = req.query
    console.log(`query bookmark: ${email}, ${songId}`)
    try {
      let user = await User.findOne({email: email})
      if (!user) return
      const relatedSongs = user.bookmark
      let find = false
      for (let i = 0; i < relatedSongs.length; i++) {
        if (relatedSongs[i] == songId) {
          find = true
          break
        }
      }
      res.send({find: find})
    } catch (err) {
      console.log('err when query bookmark:' + err)
    }
  },

  async getBookSongs (req, res) {
    const {email} = req.query
    console.log(`getBookSongs: ${email}`)
    try {
      let user = await User.
        findOne({email: email}).
        populate('bookmark').
        exec()
      console.log(`find book songs: ${(user.bookmark.map(song => song.title))}`)
      let songsInfo = []
      user.bookmark.forEach(song => {
        songsInfo.push({
          title: song.title,
          artist: song.artist
        })
      })
      res.send(songsInfo)
    } catch (err) {
      console.log(`error in getBookSongs: ${err}`)
    }
  }
}
