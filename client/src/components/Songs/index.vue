<template>
  <v-layout row>
    <v-flex xs6 class="mr-2">
      <songs-bookmarked />
      <history class="mt-2" />
    </v-flex>
    <v-flex xs6>
      <songs-search-panel class="mb-2"></songs-search-panel>
      <songs-panel></songs-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarked from './SongsBookmarked'
import History from './History'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarked,
    History
  }
}
</script>

<style>
</style>
