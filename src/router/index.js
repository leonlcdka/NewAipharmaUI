import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router
