<template>
  <panel title="historys">
    <v-data-table
      :headers="headers"
      :items="historys">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import HistoryService from '@/services/HistoryService'
import store from '@/store/store'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      historys: []
    }
  },
  async mounted () {
    const res = await HistoryService.query({
      email: store.state.user
    })
    this.historys = res.data.historys
    console.log('history:')
    console.log(this.historys)
  }
}
</script>

<style>

</style>
