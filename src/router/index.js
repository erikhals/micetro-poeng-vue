import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/User/SignIn'
import Scenes from '@/components/Scenes/Scenes'
import NewScene from '@/components/Scenes/NewScene'
import Players from '@/components/Players/Players'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/scenes',
      name: 'Scenes',
      component: Scenes
    },
    {
      path: '/newscene',
      name: 'NewScene',
      component: NewScene
    }
  ],
  mode: 'history'
})
