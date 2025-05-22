import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import './style.css'
import router from './router';

// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const pinia = createPinia();
const app = createApp(App).use(pinia).use(ElementPlus).use(router);

app.mount("#app");
