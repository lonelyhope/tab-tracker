 <template>
  <panel title="songs">
    <v-btn
      slot="action"
      @click="navigateTo({name: 'create'})"
      class="cyan accent-2"
      light
      small
      absolute
      right
      fab>
      <v-icon>add</v-icon>
    </v-btn>
    <div>
      <div v-for="song in songs" :key="song.title">
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
            name: 'song',
            params: {
              songId: song._id
            }
          })"
          class="cyan">
          View
        </v-btn>
      </div>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: []
    }
  },
  methods: {
    navigateTo: function (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style>
</style>
