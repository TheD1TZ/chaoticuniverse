import {createRouter, createWebHistory} from 'vue-router'
import demoPage from "../views/demoPage.vue";
import contactPage from "../views/contactPage.vue";
import homePage from "../views/homePage.vue";
import aboutPage from "../views/aboutPage.vue";

const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFoundPage.vue') },
    {
        path: '/',
        name: 'Home',
        component: homePage
    },
    {
        path: '/about',
        name: 'About',
        component: aboutPage
    },
    {
        path: '/demos',
        name: 'Demos',
        component: demoPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: contactPage
    },
    {
        path: '/artists',
        name: 'Artists',
        component: () => import('../views/artistPage.vue')
    },
    {
        path: '/releases',
        name: 'Releases',
        component: () => import('../views/releasePage.vue')
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `CHAOTIC UNIVERSE | ${ to.name }`;
    next()
})

export default router;