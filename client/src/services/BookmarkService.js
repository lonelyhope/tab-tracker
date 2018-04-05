import Api from '@/services/Api'

export default {
  query (bookmark) {
    return Api().get('bookmark/query', {
      params: bookmark
    })
  },
  delete (bookmark) {
    return Api().get('bookmark/unbookmark', {
      params: bookmark
    })
  },
  add (bookmark) {
    return Api().get('bookmark/bookmark', {
      params: bookmark
    })
  },
  getBookmarkedSongs (user) {
    return Api().get('bookmark/getBookSongs', {
      params: user
    })
  }
}
