import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './../pages/index/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/single',
    name: 'single',
    component: () => import('./../pages/single/Single.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router