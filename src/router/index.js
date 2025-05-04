import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Dashboard from '../components/dashboard/Dashboard.vue';
import NotFound from '../components/errors/NotFound.vue';
import Dataset from '../components/dataset/Dataset.vue';
import Models from '../components/models/Models.vue';
import Settings from '../components/settings/Settings.vue';
import Model from '../components/models/Model.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/dataset',
        name: 'Dataset',
        component: Dataset,
    },
    {
        path: '/models',
        name: 'Models',
        component: Models,
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    },
    {
        path: '/model',
        name: 'Model',
        component: Model,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
