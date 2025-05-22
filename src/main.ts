import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia';

import './style.css'
import router from './router';

import { create } from 'naive-ui'

const naive = create()
const pinia = createPinia();
const app = createApp(App).use(pinia).use(router).use(naive);

app.mount("#app");
