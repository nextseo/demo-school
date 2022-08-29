import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataExecutive from '../views/DataExecutive.vue'
import menu_2 from '@/views/bigmenu/menu_2.vue'
import menu_2_1 from '@/views/bigmenu/menu_2_1.vue'
import menu_2_2 from '@/views/bigmenu/menu_2_2.vue'
import menu_2_2_1 from '@/views/bigmenu/menu_2_2_1.vue'
import menu_2_2_2 from '@/views/bigmenu/menu_2_2_2.vue'
import menu_2_2_3 from '@/views/bigmenu/menu_2_2_3.vue'
import menu_2_2_4 from '@/views/bigmenu/menu_2_2_4.vue'
import menu_2_2_5 from '@/views/bigmenu/menu_2_2_5.vue'
import menu_2_2_6 from '@/views/bigmenu/menu_2_2_6.vue'
import menu_2_2_7 from '@/views/bigmenu/menu_2_2_7.vue'
import menu_2_2_8 from '@/views/bigmenu/menu_2_2_8.vue'
import menu_2_2_9 from '@/views/bigmenu/menu_2_2_9.vue'
import menu_2_3 from '@/views/bigmenu/menu_2_3.vue'
import menu_2_4 from '@/views/bigmenu/menu_2_4.vue'
import menu_2_5 from '@/views/bigmenu/menu_2_5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dataexecutive',
    name: 'DataExecutive',
    component: DataExecutive
  },

  {
    path: '/menu_2',
    name: 'menu_2',
    component: menu_2
  },

  {
    path: '/menu_2_1',
    name: 'menu_2_1',
    component: menu_2_1
  },

  {
    path: '/menu_2_2',
    name: 'menu_2_2',
    component: menu_2_2
  },

  {
    path: '/menu_2_2_1',
    name: 'menu_2_2_1',
    component: menu_2_2_1
  },

  {
    path: '/menu_2_2_1',
    name: 'menu_2_2_1',
    component: menu_2_2_1
  },
  
  {
    path: '/menu_2_2_2',
    name: 'menu_2_2_2',
    component: menu_2_2_2
  },

  {
    path: '/menu_2_2_3',
    name: 'menu_2_2_3',
    component: menu_2_2_3
  },
  {
    path: '/menu_2_2_4',
    name: 'menu_2_2_4',
    component: menu_2_2_4
  },
  {
    path: '/menu_2_2_5',
    name: 'menu_2_2_5',
    component: menu_2_2_5
  },
  {
    path: '/menu_2_2_6',
    name: 'menu_2_2_6',
    component: menu_2_2_6
  },
  {
    path: '/menu_2_2_7',
    name: 'menu_2_2_7',
    component: menu_2_2_7
  },
  {
    path: '/menu_2_2_8',
    name: 'menu_2_2_8',
    component: menu_2_2_8
  },
  {
    path: '/menu_2_2_9',
    name: 'menu_2_2_9',
    component: menu_2_2_9
  },

  {
    path: '/menu_2_3',
    name: 'menu_2_3',
    component: menu_2_3
  },

  {
    path: '/menu_2_4',
    name: 'menu_2_4',
    component: menu_2_4
  },

  {
    path: '/menu_2_5',
    name: 'menu_2_5',
    component: menu_2_5
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
