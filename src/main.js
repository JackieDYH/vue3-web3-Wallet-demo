/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-09-05 20:26:01
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue3-Wallet-demo/src/main.js
 * @version:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { UseWagmiPlugin, createConfig, mainnet } from 'use-wagmi';
import { createPublicClient, http } from 'viem';
const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  })
});

createApp(App).use(UseWagmiPlugin, config).use(store).use(router).mount('#app');
