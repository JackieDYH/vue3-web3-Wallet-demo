/*
 * @Author: Jackie
 * @Date: 2023-07-29 22:40:38
 * @LastEditTime: 2023-09-08 16:28:41
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-web3-auth-master/src/main.ts
 * @version:
 */
import { createApp } from 'vue';
import App from './App.vue';
import { Chains, createWeb3Auth } from '../lib';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(
  createWeb3Auth({
    autoInit: true,
    projectId: '0594169eb9fc665a0d00f07276bf829b', //'57a3047717eb3ab7e00969b66dfbbed8',
    chains: [Chains.bsc, Chains.mainnet, Chains.polygon],
    autoConnect: true,
    disconnectUnknownChain: true,
    reconnectToChain: true,
    logEnabled: true,
    enableCustomProvider: true,
    web3modalOptions: {
      themeMode: 'light',
      themeVariables: {
        '--w3m-accent-color': '#0d6efd',
        '--w3m-background-color': '#0d6efd',
        '--w3m-background-border-radius': '0.375rem',
        '--w3m-container-border-radius': '0.375rem',
        '--w3m-wallet-icon-border-radius': '0.375rem',
        '--w3m-wallet-icon-large-border-radius': '0.375rem',
        '--w3m-wallet-icon-small-border-radius': '0.375rem',
        '--w3m-input-border-radius': '0.375rem',
        '--w3m-notification-border-radius': '0.375rem',
        '--w3m-button-border-radius': '0.375rem',
        '--w3m-secondary-button-border-radius': '0.375rem',
        '--w3m-icon-button-border-radius': '0.375rem',
        '--w3m-button-hover-highlight-border-radius': '0.375rem'
      }
    }
  })
);

app.mount('#app');
