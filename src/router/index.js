/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-09-01 15:06:44
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue3-Wallet-demo/src/router/index.js
 * @version:
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/metamask',
    name: 'metamask',
    component: () => import('@/views/MetaMask.vue')
  },
  {
    path: '/walletconnect',
    name: 'walletconnect',
    component: () => import('@/views/WalletConnect.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
