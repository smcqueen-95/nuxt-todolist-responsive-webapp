<template>
  <div class="container-todo">
    <add-project />
    <filter-todo />
    <todos />
  </div>
</template>

<script>
import AddProject from '../components/AddProject.vue'
import Todos from '../components/Todos.vue'
import FilterTodo from '../components/FilterTodo.vue'

export default {
  components: {
    AddProject,
    Todos,
    FilterTodo,
  },
}
</script>

<style>
.container-todo {
  margin: 20px 20px 20px 20px;
}
</style>
