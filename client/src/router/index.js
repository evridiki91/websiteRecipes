import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AddRecipe from '@/components/AddRecipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      title: 'Home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      title: 'Register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/addrecipe',
      name: 'AddRecipe',
      component: AddRecipe
    }
  ]
})
