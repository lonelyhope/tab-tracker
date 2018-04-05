import Api from '@/services/Api'

export default {
  query (user) {
    return Api().get('/historys', {
      params: user
    })
  },
  add (historyInfo) {
    return Api().post('/historys', historyInfo)
  }
}
