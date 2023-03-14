import { createStore } from 'vuex'
import { toyService } from '../services/toy.service.js'
import { toyStore } from './modules/toy.store.js'
import { userStore } from './modules/user.store.js'

export const store = createStore({
 state: {
  msg: 'Store Is Running'
 },
 mutations: {},
 actions: {},
 getters: {
  getMsg(state) {
   return state.msg
  }
 },
 modules: {
    toyStore,
    userStore,
 }
})

export default store
