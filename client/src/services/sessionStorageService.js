export default {
  saveUserInfo (userInfo) {
    window
      .sessionStorage
      .setItem('userInfo', JSON.stringify(userInfo))
  },
  getUserInfo () {
    var userInfo = window.sessionStorage.getItem('userInfo')
    if (userInfo !== null) return JSON.parse(userInfo)
    return null
  },
  deleteUserInfo () {
    window.sessionStorage.setItem('userInfo', null)
  }
}
