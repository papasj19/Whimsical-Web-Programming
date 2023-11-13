import { createRouter, createWebHistory } from 'vue-router'
import Basket from '../views/Basket.vue'
import Contact from '../views/Contact.vue'
import Castles from '../views/Castles.vue'
import Ovi from "../views/Ovi.vue";

const routes = [
    {
        path: '/',
        name: 'Futbol',
        component: Basket
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/castles',
        name: 'castles',
        component: Castles,
    },
    {
        path: '/ovi',
        name: 'Ovi',
        component: Ovi,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router