<!-- Representa o agrupamento dos items -->
<template>
    <!-- Todo items (tarefa unitária) -->
    <div class="space-y-2">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
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