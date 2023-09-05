<!--
 * @Author: Jackie
 * @Date: 2023-09-01 15:05:56
 * @LastEditTime: 2023-09-05 15:34:51
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
    <button @click="getSign">获取签名</button>
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
// import { createSession, signMessage } from '@walletconnect/sign-client';

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

const getSign = async () => {
  try {
    // 创建会话
    /* 配置选项 */
    // const config = {
    //   bridge: 'https://bridge.walletconnect.org',
    //   uri: 'wc:...',
    //   session: {
    //     /* 已有的会话对象 */
    //   },
    //   chainId: 1,
    //   handshakeTopic: 'MyApp',
    //   metadata: {
    //     /* 自定义元数据信息 */
    //   }
    // };
    // const session = await createSession(config);
    // // 使用会话进行消息签名
    // const message = 'Hello, world!';
    // const signedMessage = await signMessage(session, message);
    // console.log('signedMessage', signedMessage);
  } catch (error) {
    console.log('error', error);
  }
};

onMounted(() => {});
</script>
