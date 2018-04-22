<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <router-link
       :to="({name: 'root'})"
       class="home">
        TabTracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
       flat dark
       :to="({name: 'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
       v-if="!store.state.isUserLoggedIn"
       :to="({name: 'login'})">
        LOGIN
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn flat dark
       v-if="!store.state.isUserLoggedIn"
       :to="({name: 'register'})">
        SIGN UP
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn flat dark
       v-if="store.state.isUserLoggedIn"
       @click="logout">
        LOGOUT
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import store from '../store/store'
import sessionStorageService from '@/services/sessionStorageService'

export default {
  data: function () {
    return {
      store: store
    }
  },
  methods: {
    logout: function () {
      store.dispatch('setToken', null)
      store.dispatch('setUser', null)
      this.$router.push({name: 'songs'})
      console.log('logout')
      sessionStorageService.deleteUserInfo()
      // 强制刷新页面
      location.reload(true)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: greenyellow;
}
</style>
