<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="login">
        <slot>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              name="input-3"
              label="password"
              v-model="password"
              type="password"
            ></v-text-field>
            <div class="err" v-html="error" />
            <br />
            <v-btn @click="login" class="cyan">
              login
            </v-btn>
          </div>
        </slot>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import store from '../store/store'

export default {
  data () {
    return {
      email: null,
      password: null,
      error: null
    }
  },
  methods: {
    login: async function () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.error = null
        store.dispatch('setToken', response.data.token)
        store.dispatch('setUser', response.data.user.email)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
        this.error = err.response.data.error // get the response from the axios and get the error
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>
.err {
  color: red;
}
</style>
