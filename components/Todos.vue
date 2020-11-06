<template>
  <div class="todos">
    <div
      v-for="todo in allTodos"
      :key="todo.id"
      class="todo"
      :class="{ 'is-complete': todo.completed }"
      @click="onClick(todo)"
    >
      <el-card class="box-card">
        {{ todo.title }}
        {{ todo.date }}
        {{ todo.time }}
        <div class="justify-content-center">
          <el-tooltip content="Double click to complete task" placement="top">
            <el-button
              class="text-indigo-900"
              style="padding: 3px 0"
              type="text"
              ><i class="el-icon-check"></i
            ></el-button>
          </el-tooltip>
          <el-tooltip content="Delete Task" placement="top">
            <el-button
              class="text-indigo-900"
              style="padding: 3px 0; margin-right: 15px"
              type="text"
              ><i class="el-icon-delete" @click="deleteTodo(todo.id)"></i
            ></el-button>
          </el-tooltip>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
  data() {
    return {
      moment,
    }
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos()
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        date: todo.date,
        time: todo.time,
        completed: !todo.completed,
      }
      this.updateTodo(updTodo)
    },
  },
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.is-complete {
  color: #434190;
  text-decoration-line: line-through;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
h3 {
  margin-top: 15px;
}
</style>
