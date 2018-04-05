<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-meta-data :song="song"></song-meta-data>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :lyrics="song.lyrics"></lyrics>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId"></you-tube>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '../../services/SongsService'
import store from '../../store/store'
import SongMetaData from './SongMetaData'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import HistoryService from '@/services/HistoryService'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = store.state.route.params.songId
    const res = await (SongsService.show(songId))
    this.song = res.data
    console.log(`view song: ${songId}, ${res.data}`)

    if (store.state.isUserLoggedIn) {
      HistoryService.add({
        email: store.state.user,
        songId: songId
      })
    }
  },
  components: {
    SongMetaData,
    YouTube,
    Lyrics
  }
}
</script>

<style>
</style>
