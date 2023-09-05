<!--
 * @Author: Jackie
 * @Date: 2023-09-05 20:42:05
 * @LastEditTime: 2023-09-05 20:42:21
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue3-Wallet-demo/src/views/WebModal.vue
 * @version: 
-->
<template>
  <div class="WalletConnect">
    <button
      v-if="initWalletSuccess"
      type="primary"
      class="qr-code-btn"
      @click="onClickWallet"
    >
      Open in wallet
    </button>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { openWallet, initClient } from '@/utils/wallet.js';
onMounted(() => {});

const initWalletSuccess = ref(false);

const initWallet = async () => {
  // 初始化wallet钱包
  console.log('init wallet ...');
  initWalletSuccess.value = false;
  await initClient();
  initWalletSuccess.value = true;
  console.log('init wallet success');
};
const onClickWallet = async () => {
  // 使用wallet钱包
  console.log('onClickWallet');
  openWallet();
};
initWallet();
</script>
