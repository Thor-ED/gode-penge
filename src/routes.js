import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import FrontPage from './components/FrontPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView, props: true },
    { path: '/front', component: FrontPage, props: true }
  ]
})

export default router
