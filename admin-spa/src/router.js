import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/pages/Home.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      component: () => import('./views/pages/Login.vue'),
      meta: {requiresAuth: false}
    },
    {
      path: '/posts/:id',
      component: () => import('./views/pages/Action.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/posts',
      component: () => import('./views/pages/Action.vue'),
      meta: {requiresAuth: true}
    },
  ]
})
