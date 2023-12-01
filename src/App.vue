<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

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

export default {
    name: "App",
    components: { TodoSpinner, TodoForm, TodoItems, TodoEmpty }
};
</script>
