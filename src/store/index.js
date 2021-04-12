import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deposit: 0,
    gain: 500,
    reset: 0
  },
  mutations: {
    save(state) {
      state.deposit += state.gain;
    },
    setGain(state, gain) {
      state.gain = gain;
    },
    rst(state) {
      state.deposit = 0
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[createPersistedState({key: 'kenyaku'})]
})
