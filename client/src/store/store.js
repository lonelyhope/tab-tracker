import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
      console.log('setToken:' + token)
      console.log('isUserLoggedIn: ' + state.isUserLoggedIn)
    },
    setUser (state, user) {
      console.log('setUser: ' + user)
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})

export default store
