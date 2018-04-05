const { History, User } = require('../models')

module.exports = {
  // 添加历史
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
      let history = await HistoryInfo.save()
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
  async query (req, res) {
    const { email } = req.query
    console.log(email)
    try {
      let user = await User.findOne({email: email})
      let historys = await History.find({userId: user._id})
      console.log(`query historys: ${historys}`)
      res.send('ok')
    } catch (err) {
      console.log(`error when query history: ${err}`)
    }
  }
}
