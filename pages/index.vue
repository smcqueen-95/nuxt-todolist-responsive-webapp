<template>
  <div class="container bg-indigo-800">
    <div class="w-full max-w-xs">
      <form
        class="bg-indigo-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="pressed"
      >
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="email"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              id="email"
              v-model="email"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="jane@gmail.com"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              id="password"
              v-model="password"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        <div class="flex items-center">
          <button
            class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div class="md:flex md:items-center mt-2">
          <a
            class="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-300"
            href="/signin"
          >
            Already Signed Up? Login!
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
        .createUserWithEmailAndPassword(this.email, this.password)
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
