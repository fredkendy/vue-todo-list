import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    //mutations vai comitar o state
    //payload é a mensagem em si
    storeTodos(state, payload) {
      state.todos = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
