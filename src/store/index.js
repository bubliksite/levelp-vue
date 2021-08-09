import {createStore} from 'vuex'

export default createStore({
  state: {
    counter: 5
  },
  mutations: {
    increment(state, sign) {
      if (sign === '+') {
        state.counter++
      } else {
        state.counter--
      }
    }
  },
  actions: {},
  getters: {
    counter(state) {
      return state.counter > 30 ? `${state.counter}@` : state.counter
    }
  },
  modules: {}
})
