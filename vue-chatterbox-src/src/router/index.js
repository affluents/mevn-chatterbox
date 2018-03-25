import Vue from 'vue'
import Router from 'vue-router'
import ChatMain from '@/components/ChatMain'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component: Login
    },
    {
      path:'/ChatMain',
      name:'ChatMain',
      component: ChatMain
    }
  ],
  mode: 'history'
})
