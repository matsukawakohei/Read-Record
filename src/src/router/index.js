import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
/**
 * @todo
 * コンポーネントを作成
 */
import BookSearch from '../views.BookSearch.vue'
import BookForm from '../views.BookForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: BookSearch
  },
  {
    path: '/form',
    name: 'Form',
    component: BookForm
  },
  {
    path: '/:paths(.*)*',
    name: 'Failback',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
