<template>
  <panel title="Song Metadata" class="metaInfo">
    <v-layout>
      <v-flex xs6>
        <div>
          {{ song.title }}
        </div>
        <div>
          {{ song.artist }}
        </div>
        <div>
          {{ song.genre }}
        </div>
        <v-btn
          @click="navigateTo({
            name: 'song-edit',
            params: {
              songId: song._id
            }
          })"
          class="cyan">
          Edit
        </v-btn>
        <v-btn
          @click="bookmark(true)"
          v-if="!booked"
          class="cyan">
          Bookmark
        </v-btn>
         <v-btn
          @click="bookmark(false)"
          v-if="booked"
          class="cyan">
          UnBookmark
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br />
        {{ song.album }}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import BookmarkServices from '@/services/BookmarkService'
import store from '@/store/store'

export default {
  props: ['song'],
  data () {
    return {
      booked: false
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async bookmark (flag) {
      let handle
      if (flag) handle = BookmarkServices.add
      else handle = BookmarkServices.delete
      let res = await handle({
        email: store.state.user,
        songId: this.song._id
      })
      if (res.data.done) {
        this.booked = flag
      }
    }
  },
  async mounted () {
    // 这里找不到 song._id >.<
    const songId = store.state.route.params.songId
    const bookmark = await BookmarkServices.query({
      email: store.state.user,
      songId: songId
    })
    this.booked = bookmark.data.find
    console.log(bookmark.data.find)
  }
}
</script>

<style scoped>
.album-image {
  width: 100%;
  height: transparent;
}
.metaInfo {
  height: 400px;
  width: transparent;
  overflow: auto
}
</style>
