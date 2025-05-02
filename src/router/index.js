import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import LoginPage from '../components/account/Login.vue';
import Dashboard from '../components/dashboard/Dashboard.vue';
import NotFound from '../components/errors/NotFound.vue';
import Dataset from '../components/dataset/Dataset.vue';
import DatasetIndex from '../components/dataset/DatasetIndex.vue';
import Models from '../components/models/Models.vue';
import Settings from '../components/settings/Settings.vue';
import Model from '../components/models/Model.vue';
import Test from '../components/test/Test.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main,
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
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
    {
        path: '/test',
        name: 'Test',
        component: Test,
    },
    {
        path: '/dataset_index',
        name: 'DatasetIndex',
        component: DatasetIndex,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
