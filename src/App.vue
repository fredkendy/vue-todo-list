<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

      <TodoSpinner v-if="loading" />

      <template v-else>
        <TodoForm />
      
        <TodoItems />

        <TodoEmpty />
      </template>
      
    </div>
  </div>
</template>

<script>
import TodoSpinner from './components/TodoSpinner.vue';
import TodoForm from './components/TodoForm.vue';
import TodoItems from './components/TodoItems.vue';
import TodoEmpty from './components/TodoEmpty.vue';
import axios from 'axios';

export default {
    name: "App",
    components: { 
      TodoSpinner, TodoForm, TodoItems, TodoEmpty 
    },

    data() {
      return {
        loading: false
      }
    },

    created() {
      //antes do ajax
      this.loading = true
      //Requisição ao json-server (database.json) com as todos
      //então, qdo o ajax terminar, comitar o resultado do ajax (response.data) -> vuex
      axios.get('http://localhost:3000/todos')
        .then((response) => {
          this.$store.commit('storeTodos', response.data)
        })
        .finally(() => {
          this.loading = false
        })
    }
};
</script>
