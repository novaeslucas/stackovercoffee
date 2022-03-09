import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/questao/:id',
        name: 'questao',
        component: () => import('../views/Questao.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router