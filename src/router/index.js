/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-09-07 19:57:03
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
  },
  {
    path: '/walletconnect2',
    name: 'walletconnect2',
    component: () => import('@/views/WalletConnectV2.vue')
  },
  {
    path: '/particleconnevct',
    name: 'particleconnevct',
    component: () => import('@/views/ParticleConnevct.vue')
  },
  {
    path: '/usewagmi',
    name: 'usewagmi',
    component: () => import('@/views/UseWagmi.vue')
  },
  {
    path: '/webmodal',
    name: 'webmodal',
    component: () => import('@/views/WebModal.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
