<template>
  <div class="container-todo">
    <create-task />
    <filter-todo />
    <todos />
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import CreateTask from '../components/CreateTask.vue'
import Todos from '../components/Todos.vue'
import FilterTodo from '../components/FilterTodo.vue'

export default {
  components: {
    CreateTask,
    Todos,
    FilterTodo,
  },
  data() {
    return {
      user: '',
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user

      if (!this.user) this.$router.push('/signin')
    })
  },
}
</script>

<style scoped>
.container-todo {
  margin: 20px 20px 20px 20px;
}
</style>
