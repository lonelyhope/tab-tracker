const { History, User, Song } = require('../models')

module.exports = {
  // 添加历史
  // 先判断历史歌曲是否存在，若不存在则插入
  async add (req, res) {
    const { email, songId } = req.body
    try {
      let user = await User.findOne({email: email})
      let oldHistory = await History.findOne({
        songId: songId,
        userId: user._id
      })
      let HistoryInfo
      if (oldHistory) {
        HistoryInfo = oldHistory
      } else {
        HistoryInfo = new History({
          songId: songId,
          userId: user._id
        })
      }
      await HistoryInfo.save()
      console.log(`save history success: ${email}, ${songId}`)
      res.send('ok')
    } catch (err) {
      console.log(`error in add history: ${err}`)
    }
  },

  // 删除历史
  async delete (req, res) {
  },

  // 查询历史
  // find user.email --> user._id --> find history.songs._id --> find song
  // 需要 2 + n 次查找（n个历史）
  async query (req, res) {
    const { email } = req.query
    console.log(email)
    try {
      let user = await User.findOne({email: email})
      let historys = await History.find({userId: user._id})
      console.log(`query historys: ${historys}`)
      let historySongs = []
      for (let i = 0; i < historys.length; i++) {
        let song = await Song.findOne({ _id: historys[i].songId })
        historySongs.push(song)
      }
      res.send({
        historys: historySongs
      })
    } catch (err) {
      console.log(`error when query history: ${err}`)
      res.status(500).send({error: err})
    }
  }
}
