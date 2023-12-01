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
    },
    //Salvando novo to-do
    storeTodo(state, payload) {
      //push add no final, unshift no começo
      state.todos.push(payload)
    },

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
    },

    addTodo({ commit }, data) {
      return axios.post('http://localhost:3000/todos', data).then((response) => {
        commit('storeTodo', response.data)
      })
    },

    //na segunda parte do parametro, precisa usar o destruct do JS, pois as actions só aceitam 2 parâmetros
    //e precisamos do id para realizar a atualização, bem como o payload (data)
    updateTodo(context , { id, data }) {
      return axios.put(`http://localhost:3000/todos/${id}`, data)
    }
      
  },
  modules: {
  }
})
