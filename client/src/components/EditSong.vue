<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <div v-for="key in metaSongsKey" :key="key">
          <v-text-field
            :label="key"
            required
            :rules="[required]"
            v-model="song[key]"
          ></v-text-field>
        </div>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <div v-for="key in StrucSongsKey" :key="key">
          <v-text-field
            :label="key"
            required
            :rules="[required]"
            multi-line
            v-model="song[key]"
          ></v-text-field>
        </div>
      </panel>
      <div class="err" v-if="error">
        {{ error }}
      </div>
      <v-btn @click="save" class="cyan">
        SAVE
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import store from '@/store/store'

export default {
  data () {
    return {
      metaSongsKey: ['title', 'artist', 'genre',
        'album', 'albumImageUrl', 'youtubeId'],
      StrucSongsKey: ['lyrics', 'tab'],
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required.',
      error: null,
      songId: null
    }
  },
  components: {
  },
  async mounted () {
    this.songId = store.state.route.params.songId
    const res = await (SongsService.show(this.songId))
    this.song = res.data
  },
  methods: {
    save: async function () {
      this.error = null
      console.log(this.song)
      const AreAllFeildsFilledIn = this.metaSongsKey
        .concat(this.StrucSongsKey)
        .every(key => {
          // console.log(`${key}:${this.song[key]} ${!!this.song[key]}`)
          return !!this.song[key]
        })
      if (!AreAllFeildsFilledIn) {
        this.error = 'Please filled in all the required fields.'
        return
      }
      try {
        console.log(this.song.title)
        await SongsService.put(this.song, this.songId)
        this.$router.push({
          name: 'song',
          params: {
            songId: this.songId
          }
        })
      } catch (err) {
        console.log('error when create song: ' + err)
      }
    }
  }
}
</script>

<style scoped>
.err {
  color: red;
}
</style>
