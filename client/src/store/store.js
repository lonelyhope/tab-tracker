import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import sessionStorageService from '@/services/sessionStorageService'

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
      sessionStorageService.saveUserInfo({
        user: state.user,
        token: state.token
      })
    },
    setUser (state, user) {
      console.log('setUser: ' + user)
      state.user = user
      sessionStorageService.saveUserInfo({
        user: state.user,
        token: state.token
      })
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
  // plugins: [
  //   createPersistedState() // 将store信息保存在 localstorage 中，初始化
  // ]
})

export default store
