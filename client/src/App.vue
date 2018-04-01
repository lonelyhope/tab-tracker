<template>
  <div id="app">
    <v-app>
      <page-header />
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
  // created: function () {
  //   console.log('App: ' + this.$store)
  //   console.log(this.$router)
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .input-group--text-field input {
  border-bottom: 1px solid black;
} */
.toolbar__title {
  color: white;
}
.btn__content {
  color: white;
}
</style>
