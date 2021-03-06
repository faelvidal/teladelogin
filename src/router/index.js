import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Cadastrar from '../components/cadastrar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }

  ,

  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  ,
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: Cadastrar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
