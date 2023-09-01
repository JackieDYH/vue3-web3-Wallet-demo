<!--
 * @Author: Jackie
 * @Date: 2023-09-01 15:05:56
 * @LastEditTime: 2023-09-01 20:41:50
 * @LastEditors: Jackie
 * @Description: https环境
 * @FilePath: /Vue3-Wallet-demo/src/views/WalletConnect.vue
 * @version: 
-->
<template>
  <div class="WalletConnect">
    <h1>This is an WalletConnect page-{{ projectId }}</h1>
    <button @click="modal">Walletconnect</button>
    <w3m-core-button>Walletconnect2</w3m-core-button>
    <button @click="getAddress">获取地址</button>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/html';
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains';
import {
  configureChains,
  createConfig,
  getAccount,
  getContract
} from '@wagmi/core';

const projectId = process.env.VUE_APP_PROJECTID;
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set');
}

const chains = [arbitrum, mainnet, polygon];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const web3modal = new Web3Modal({ projectId }, ethereumClient);

const modal = () => {
  web3modal.openModal();
};

const getAddress = async () => {
  const account = await getAccount(ethereumClient);
  console.log('account', account);
};

onMounted(() => {});
</script>
