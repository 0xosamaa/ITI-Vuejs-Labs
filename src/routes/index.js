import { createRouter, createWebHistory } from 'vue-router';
import _404 from '../components/404.vue';
import WishlistComponent from "@/components/WishlistComponent"
import BooksComponent from '@/components/BooksComponent';

const routes = [
    {
        path: '/',
        component: BooksComponent,
    },
    {
        path: '/wishlist',
        component: WishlistComponent,
    },
    {
        // catch rest
        path: '/:catchAll(.*)',
        component: _404,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
