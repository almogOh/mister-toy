import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToyIndex from '../views/ToyIndex.vue'
import ToyEdit from '../views/ToyEdit.vue'
import ToyDetails from '../views/ToyDetails.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/toys',
      name: 'toys',
      component: ToyIndex
    },
    {
      path: '/toys/edit/:toyId?',
      name: 'edit',
      component: ToyEdit
    },
    {
      path: '/toys/details/:toyId?',
      name: 'details',
      component: ToyDetails
    },
  ]
})

export default router
