import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PokeList from '../views/PokeList.vue'
import Description from '../views/Description.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PokeList',
    name: 'PokeLIst',
    component: PokeList
  },
  {
    path: '/pokemon/:id',
    name: 'Description',
    component: Description
  }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router;