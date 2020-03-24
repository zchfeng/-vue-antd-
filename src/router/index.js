import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login.vue'
import Register from '@/pages/register.vue'
import Home from '@/pages/home.vue'
import news from '@/pages/news.vue'
import Chat from '@/pages/chat.vue'
import Address from '@/pages/address.vue'

Vue.use(Router)

 const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '',
          name:'news',
          component: news
        },
        {
          path: 'address',
          name:'Address',
          component: Address
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ], 
})
// router.beforeEach((to, from, next) => {
//   if(!localStorage.getItem("token") && to.path != '/login'){
//     next({path:'/login'})
//   }
//   next()
// })
export default router 