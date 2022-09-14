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
import menu_2_6_1 from '@/views/bigmenu/menu_2_6_1.vue'
import menu_2_6_2 from '@/views/bigmenu/menu_2_6_2.vue'
import menu_2_6_3 from '@/views/bigmenu/menu_2_6_3.vue'
import menu_2_7 from '@/views/bigmenu/menu_2_7'
import menu_3_1 from '@/views/bigmenu/menu_3_1'
import menu_3_2 from '@/views/bigmenu/menu_3_2'
import menu_3_3 from '@/views/bigmenu/menu_3_3'
import menu_3_4 from '@/views/bigmenu/menu_3_4'
import menu_3_5 from '@/views/bigmenu/menu_3_5'
import menu_3_6 from '@/views/bigmenu/menu_3_6'
import menu_3_7 from '@/views/bigmenu/menu_3_7'
import menu_3_8 from '@/views/bigmenu/menu_3_8'
import menu_4_1 from '@/views/bigmenu/menu_4_1'
import menu_4_2 from '@/views/bigmenu/menu_4_2'
import menu_4_3 from '@/views/bigmenu/menu_4_3'
import menu_4_4 from '@/views/bigmenu/menu_4_4'
import menu_4_5 from '@/views/bigmenu/menu_4_5'
import menu_4_6 from '@/views/bigmenu/menu_4_6'
import menu_4_7 from '@/views/bigmenu/menu_4_7'
import menu_4_8 from '@/views/bigmenu/menu_4_8'
import menu_5_1 from '@/views/bigmenu/menu_5_1'
import menu_5_2 from '@/views/bigmenu/menu_5_2'
import menu_5_3 from '@/views/bigmenu/menu_5_3'
import menu_5_4 from '@/views/bigmenu/menu_5_4'
import menu_5_5 from '@/views/bigmenu/menu_5_5'
import menu_6_1 from '@/views/bigmenu/menu_6_1'
import menu_6_2 from '@/views/bigmenu/menu_6_2'
import menu_6_3 from '@/views/bigmenu/menu_6_3'
import menu_6_4 from '@/views/bigmenu/menu_6_4'
import menu_6_5 from '@/views/bigmenu/menu_6_5'
import menu_6_6 from '@/views/bigmenu/menu_6_6'
import menu_6_7 from '@/views/bigmenu/menu_6_7'
import menu_6_8 from '@/views/bigmenu/menu_6_8'
import menu_6_9 from '@/views/bigmenu/menu_6_9'
import menu_6_10 from '@/views/bigmenu/menu_6_10'
import menu_6_11 from '@/views/bigmenu/menu_6_11'
import menu_6_12 from '@/views/bigmenu/menu_6_12'




import PressRelease from '@/views/bigmenu/PressRelease'
import ContactUs from '@/views/bigmenu/ContactUs'
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
    path: '/menu_2_6_1',
    name: 'menu_2_6_1',
    component: menu_2_6_1
  },
  {
    path: '/menu_2_6_2',
    name: 'menu_2_6_2',
    component: menu_2_6_2
  },
  {
    path: '/menu_2_6_3',
    name: 'menu_2_6_3',
    component: menu_2_6_3
  },
  {
    path: '/menu_2_7',
    name: 'menu_2_7',
    component: menu_2_7
  },
  {
    path: '/menu_3_1',
    name: 'menu_3_1',
    component: menu_3_1
  },

  {
    path: '/menu_3_2',
    name: 'menu_3_2',
    component: menu_3_2
  },
  {
    path: '/menu_3_3',
    name: 'menu_3_3',
    component: menu_3_3
  },
  {
    path: '/menu_3_4',
    name: 'menu_3_4',
    component: menu_3_4
  },
  {
    path: '/menu_3_5',
    name: 'menu_3_5',
    component: menu_3_5
  },
  {
    path: '/menu_3_6',
    name: 'menu_3_6',
    component: menu_3_6
  },
  {
    path: '/menu_3_7',
    name: 'menu_3_7',
    component: menu_3_7
  },
  {
    path: '/menu_3_8',
    name: 'menu_3_8',
    component: menu_3_8
  },
  {
    path: '/menu_4_1',
    name: 'menu_4_1',
    component: menu_4_1
  },
  {
    path: '/menu_4_2',
    name: 'menu_4_2',
    component: menu_4_2
  },
  {
    path: '/menu_4_3',
    name: 'menu_4_3',
    component: menu_4_3
  },
  {
    path: '/menu_4_4',
    name: 'menu_4_4',
    component: menu_4_4
  },
  {
    path: '/menu_4_5',
    name: 'menu_4_5',
    component: menu_4_5
  },
  {
    path: '/menu_4_6',
    name: 'menu_4_6',
    component: menu_4_6
  },
  {
    path: '/menu_4_7',
    name: 'menu_4_7',
    component: menu_4_7
  },
  {
    path: '/menu_4_8',
    name: 'menu_4_8',
    component: menu_4_8
  },
  {
    path: '/menu_5_1',
    name: 'menu_5_1',
    component: menu_5_1
  },
  {
    path: '/menu_5_2',
    name: 'menu_5_2',
    component: menu_5_2
  },

  {
    path: '/menu_5_3',
    name: 'menu_5_3',
    component: menu_5_3
  },

  {
    path: '/menu_5_4',
    name: 'menu_5_4',
    component: menu_5_4
  },

  {
    path: '/menu_5_5',
    name: 'menu_5_5',
    component: menu_5_5
  },
  {
    path: '/menu_6_1',
    name: 'menu_6_1',
    component: menu_6_1
  },
  {
    path: '/menu_6_2',
    name: 'menu_6_2',
    component: menu_6_2
  },

  {
    path: '/menu_6_3',
    name: 'menu_6_3',
    component: menu_6_3
  },

  {
    path: '/menu_6_4',
    name: 'menu_6_4',
    component: menu_6_4
  },
  {
    path: '/menu_6_5',
    name: 'menu_6_5',
    component: menu_6_5
  },
  {
    path: '/menu_6_6',
    name: 'menu_6_6',
    component: menu_6_6
  },
  {
    path: '/menu_6_7',
    name: 'menu_6_7',
    component: menu_6_7
  },
  {
    path: '/menu_6_8',
    name: 'menu_6_8',
    component: menu_6_8
  },
  {
    path: '/menu_6_9',
    name: 'menu_6_9',
    component: menu_6_9
  },
  {
    path: '/menu_6_10',
    name: 'menu_6_10',
    component: menu_6_10
  },
  {
    path: '/menu_6_11',
    name: 'menu_6_11',
    component: menu_6_11
  },
  {
    path: '/menu_6_12',
    name: 'menu_6_12',
    component: menu_6_12
  },




  

  {
    path: '/PressRelease',
    name: 'PressRelease',
    component: PressRelease
  },

  
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
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
