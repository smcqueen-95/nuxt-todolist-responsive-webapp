<template>
  <div class="container bg-indigo-800">
    <div class="w-full max-w-xs">
      <form
        class="bg-indigo-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="pressed"
      >
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            id="email"
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-200 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-300"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <div v-if="error" class="error">{{ error.message }}</div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  layout: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          // eslint-disable-next-line
          console.log(data)
          this.$router.push('/home')
        })
        .catch((error) => (this.error = error))
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
