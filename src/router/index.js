import { createRouter, createWebHashHistory } from 'vue-router'
import myHome from '/src/view/myHome.vue'
import vTable from '/src/components/vTable.vue'
const routes = [
    {
        path: '/',
        name: 'myHome',
        component: myHome,
    },
    {
        path: '/vTable',
        name: 'vTable',
        component: vTable,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router
