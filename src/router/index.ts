import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/shared/pages/HomePage.vue';
import AboutPage from '@/shared/pages/AboutPage.vue';
import movieRoute from '@/movies/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },

    // Movies
    { ...movieRoute, path: '/movies' },
    // movieRoute,
    // { path: '/movies', name: 'movies', component: () => import('@/movies/layout/MovieLayout.vue') },
    
    // Default
    { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
  ]
});

export default router;
