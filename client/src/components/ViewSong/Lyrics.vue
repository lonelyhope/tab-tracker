<template>
  <panel title="Lyric" class="lyric">
    {{ lyrics }}
  </panel>
</template>

<script>
export default {
  props: ['lyrics'],
  components: {
  }
}
</script>

<style>
.lyric {
  white-space: pre-line;
  height: 400px;
  overflow: auto;
}
</style>
