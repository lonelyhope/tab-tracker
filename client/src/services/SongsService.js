import Api from '@/services/Api'

export default {
  index (search) {
    if (search) {
      return Api().get('songs', {
        params: {
          search: search
        }
      })
    }
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get('songs/' + songId)
  },
  put (song, songId) {
    return Api().put(`songs/${songId}`, song)
  }
}
