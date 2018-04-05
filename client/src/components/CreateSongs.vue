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
      <v-btn @click="create" class="cyan">
        create song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

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
      error: null
    }
  },
  components: {
  },
  methods: {
    create: async function () {
      this.error = null
      const AreAllFeildsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!AreAllFeildsFilledIn) {
        this.error = 'Please filled in all the required fields.'
        return
      }
      try {
        console.log(this.song.title)
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
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
