import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { OhVueIcon, addIcons } from "oh-vue-icons";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component("v-icon", OhVueIcon);
app.mount('#app');
