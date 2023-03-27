import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import AuctionPlayer from '../components/AuctionPlayer.vue'
import AuctionBay from '../components/AuctionBay.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auctionPlayer',
    name: 'auctionPlayer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AuctionPlayer
  },
  {
    path: '/auctionBay',
    name: 'auctionBay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AuctionBay
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
