/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-09-05 11:24:22
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue3-Wallet-demo/src/main.js
 * @version:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
