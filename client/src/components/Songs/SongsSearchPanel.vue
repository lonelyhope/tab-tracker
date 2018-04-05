<template>
  <panel title="search song">
    <v-text-field
      label="search by song title, artist or album"
      v-model="search"
      >
    </v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: null
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>

</style>
