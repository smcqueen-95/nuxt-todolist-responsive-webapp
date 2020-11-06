<template>
  <div class="flex flex-wrap">
    <button
      class="list-button bg-indigo-800 hover:bg-indigo-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      type="button"
      @click="dialogVisible = true"
    >
      <i class="el-icon-plus"></i>
      Create Project Task
    </button>
    <div class="dialog-content">
      <el-dialog
        class="dialog-box"
        title="Create Project Task"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <form @submit.prevent="sub">
          <div class="form-group">
            <el-label for="create">
              Create Project <i class="el-icon-plus"></i>
            </el-label>
            <el-input
              id="create"
              v-model="listtodo"
              class="mb-3"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 8 }"
              placeholder="*Buy gift for tomorrow #Errands"
            >
            </el-input>
            <div class="inline-block">
              <el-date-picker
                v-model="value1"
                class="date-picker"
                type="date"
                placeholder="Pick a day"
                size="small"
                format="yyyy-MMM-dd"
              >
              </el-date-picker>
              <el-time-picker
                v-model="value2"
                size="small"
                class="time-picker"
                format="hh:mm a"
                time-arrow-control="true"
                :picker-options2="{
                  start: '01:00',
                  end: '24:00',
                }"
                placeholder="Select time"
              >
              </el-time-picker>
            </div>

            <span slot="footer" class="dialog-footer inline-flex">
              <button
                class="add-btn bg-indigo-800 hover:bg-indigo-700 text-white mt-20px font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                @click="dialogVisible = false"
              >
                Add Project
              </button>
            </span>
          </div>
        </form>
        <span>
          <button
            class="cancel-btn bg-red-700 hover:bg-red-700 text-white font-bold mr-2 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            @click="dialogVisible = false"
          >
            Cancel
          </button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dialogVisible: false,
      listtodo: '',
      value1: '',
      value2: '',
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to cancel this todo?')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    ...mapActions(['addTodo']),
    sub(e) {
      e.preventDefault()
      this.addTodo(this.listtodo)
    },
  },
}
</script>

<style>
.container-todo {
  margin: 20px 20px 20px 20px;
}
.list-button {
  margin-top: 10px;
}
.dialog-box {
  width: 100%;
}
.cancel-btn {
  margin-top: 10px;
}
.date-picker {
  margin-top: 5px;
}
.time-picker {
  margin-top: 10px;
}
.add-btn {
  margin-top: 10px;
}
.dialog-box {
  background-color: #a3bffa;
}
@media (max-width: 540px) {
  .dialog-box {
    background-color: #a3bffa;
  }
  .form-group {
    width: 100%;
  }
  .time-picker {
    width: 40px;
  }
  .date-picker {
    width: 40px;
  }
}
</style>
