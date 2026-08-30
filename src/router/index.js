import {
    createRouter,
    createWebHistory,
} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
    },

    {
        path: '/projects/:slug',
        name: 'project',
        component: () => import('@/views/ProjectView.vue'),
    },

    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
]

const router = createRouter({
    history: createWebHistory(),

    routes,

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return {
            top: 0,
            behavior: 'smooth',
        }
    },
})

export default router