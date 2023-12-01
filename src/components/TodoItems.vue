<!-- Representa o agrupamento dos items -->
<template>
    <!-- Todo items (tarefa unitária) -->
    <div class="space-y-2">
        <TodoItem 
            v-for="todo in $store.state.todos"
            :key="todo.id"
        />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    components: {
        TodoItem
    }
}
</script>