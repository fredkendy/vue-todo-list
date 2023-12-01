<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

      <pre>
        {{ todos }}
      </pre>

      <TodoSpinner />

      <TodoForm />
      
      <TodoItems />

      <TodoEmpty />
      
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
        todos: []
      }
    },

    created() {
      //Requisição ao json-server (database.json) com as todos
      //então, atribuir o resultado ao array declarado no data() (poderia ter utilizado o async await)
      axios.get('http://localhost:3000/todos')
        .then((response) => {
          this.todos = response.data
        })
    }
};
</script>
