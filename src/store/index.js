import { createStore } from 'vuex'
import auth from './modules/auth'
import user from './modules/users'

const store = createStore({
  modules: {
    auth,
    user,
  },
  strict: process.env.DEBUGGING,
})

export default store
