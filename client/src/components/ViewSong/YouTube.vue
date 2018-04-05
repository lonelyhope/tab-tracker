<template>
  <panel title="YouTube Vedio" class="mt-2">
    {{ youtubeId }}
    <youtube
      :video-id="youtubeId"
      :player-width="550"
      :player-height="500"
    ></youtube>
  </panel>
</template>

<script>
export default {
  props: ['youtubeId'],
  components: {
  }
}
</script>

<style>

</style>
