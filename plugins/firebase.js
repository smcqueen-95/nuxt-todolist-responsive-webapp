import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCk-bszp8pxa1aCOHyBGc1lWqcOPH7zgxs',
  authDomain: 'todo-app-auth-cf54e.firebaseapp.com',
  databaseURL: 'https://todo-app-auth-cf54e.firebaseio.com',
  projectId: 'todo-app-auth-cf54e',
  storageBucket: 'todo-app-auth-cf54e.appspot.com',
  messagingSenderId: '627996490540',
  appId: '1:627996490540:web:b8c987de62a65e4a828a89',
  measurementId: 'G-35R7C7KH1V',
}

let app = null
if (!firebase.apps.length) {
  // eslint-disable-next-line no-unused-vars
  app = firebase.initializeApp(firebaseConfig)
}

export default firebase
