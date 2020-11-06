<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo-900 p-6">
    <div class="flex items-center flex-shrink-0 text-gray-200 mr-6">
      <a class="navbar-brand" href="/home">
        <span class="font-semibold text-xl tracking-tight">ToDo List App</span>
      </a>
    </div>
    <div class="block lg:hidden">
      <button
        data-target="#navigation"
        class="nav-toggler flex items-center px-3 py-2 border rounded text-gray-200 border-indigo-700 hover:text-white hover:border-white nav-toggler"
        @click="isOpen = !isOpen"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      id="navigation"
      :class="isOpen ? 'block' : 'hidden'"
      class="collapse w-full flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <a
          href="/home"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-indigo-400 mr-4"
          ><i class="m-auto el-icon-notebook-1"></i>
          All Tasks
        </a>
        <a
          href="/createproject"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-indigo-400 mr-4"
          ><i class="el-icon-plus"></i>
          Create Project Tasks
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-indigo-400 mr-4"
          ><i class="el-icon-sunrise-1"></i>
          Today
        </a>
        <a
          href="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-indigo-400"
          ><i class="el-icon-bell"></i>
          Reminders
        </a>
      </div>
      <div>
        <el-dropdown>
          <el-button
            size="mini"
            class="user-button block mt-4 lg:inline-block lg:mt-0"
            >Welcome, {{ user.email
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">
              <a href="/account">Account</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <button v-if="user" @click="logout">Logout</button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </nav>
</template>
<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      isOpen: false,
      user: '',
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      // eslint-disable-next-line no-console
      console.log(user)
      this.user = user
    })
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
          this.user = ''
          this.$router.push('/signin')
        })
    },
  },
}
</script>

<style>
.user-button {
  color: gainsboro;
  background-color: #434190;
  margin-top: 4px;
}
</style>
