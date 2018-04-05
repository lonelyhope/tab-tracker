<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="register">
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
            <v-btn @click="register" class="cyan">
              submit
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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    register: async function () {
      try {
        const response = await AuthenticationService.register({
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
        this.error = err.response.data.error // get the response from the axios and get the error
        console.log(err.response.data.error)
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>
/* anyone here will not influence the content in other files
  只为本文件的template服务 因为有scoped*/
.err {
  color: red;
}
</style>
