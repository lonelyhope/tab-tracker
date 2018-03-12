<template>
  <div>
      <h1>Register</h1>
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
      <button @click="register">
        submit
      </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register: async function () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
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

</style>
