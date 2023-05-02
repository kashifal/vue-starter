import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Podcast from '../views/Podcast.vue';
 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/podcast',
            name: 'Podcast',
            component: Podcast
        }
    ]
})

export default router;
