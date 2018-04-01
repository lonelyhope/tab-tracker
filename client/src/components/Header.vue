<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <span @click="navigateTo({name: 'root'})" class="home">
        TabTracker
      </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
       v-show="!store.state.isUserLoggedIn"
       @click="navigateTo({name:'login'})">
        LOGIN
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark
       v-show="!store.state.isUserLoggedIn"
       @click="navigateTo({name:'register'})">
        SIGN UP
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import store from '../store/store'

export default {
  data: function () {
    return {
      showLS: true,
      store: store
    }
  },
  methods: {
    navigateTo: function (route) {
      this.$router.push(route)
      if (store.state.isUserLoggedIn) {
        console.log('not going to show login and register')
        this.showLS = false
      }
    }
  },
  created: function () {
    console.log(store.state.isUserLoggedIn)
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
