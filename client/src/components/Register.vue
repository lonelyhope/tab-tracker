<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
            <input
              type="email"
              name="email"
              v-model="email"
              placeholder="email" />
            <br />
            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="password" />
            <br />
            <div class="error" v-html="error" />
            <br />
            <v-btn @click="register" class="cyan">
              submit
            </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

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
        console.log(response.data)
        this.err = ''
      } catch (err) {
        this.error = err.response.data.error // get the response from the axios and get the error
      }
    }
  }
//   mounted () { // Don't work. Why?
//     setTimeout(function () {
//       this.email = '123'
//     }, 0)
//   }
}
</script>

<style scoped>
/* anyone here will not influence the content in other files
  只为本文件的template服务 因为有scoped*/
.error {
  color: red;
}
</style>
