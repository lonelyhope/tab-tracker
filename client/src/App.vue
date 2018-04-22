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
import sessionStorageService from './services/sessionStorageService'

export default {
  name: 'App',
  components: {
    PageHeader
  },
  created () {
    console.log('mounted:')
    var userInfo = sessionStorageService.getUserInfo()
    console.log('userInfo:')
    console.log(userInfo)
    if (userInfo !== null) {
      this.$store.dispatch('setToken', userInfo.token)
      this.$store.dispatch('setUser', userInfo.user)
    }
  }
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
