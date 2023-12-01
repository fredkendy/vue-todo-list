import { createStore } from 'vuex'
import axios from 'axios'

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
  //retorna uma promise
  actions: {
    getTodos({ commit }) {
      //Requisição ao json-server (database.json) com as todos
      //então, qdo o ajax terminar, comitar o resultado do ajax (response.data) -> vuex
      return axios.get('http://localhost:3000/todos')
        .then((response) => {
          commit('storeTodos', response.data)
        })
    }
      
  },
  modules: {
  }
})
