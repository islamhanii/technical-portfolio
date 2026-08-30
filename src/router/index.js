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
        redirect: { name: 'home' }, // Fixed: Redirects to named route instead of root domain '/'
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Fixed: Passes base path from vite.config.ts

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