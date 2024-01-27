import Vue from 'vue'
import VueRouter from 'vue-router'
import TripDetails from '../views/TripDetails'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/TripDetails",
    name: "TripDetails",
    component:TripDetails
  },
  {
    path:"/NewTrip",
    name:"NewTrip",
    component:() => import('../views/NewTrip.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
