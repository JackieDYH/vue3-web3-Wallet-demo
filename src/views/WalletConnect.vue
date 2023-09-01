<!--
 * @Author: Jackie
 * @Date: 2023-09-01 15:05:56
 * @LastEditTime: 2023-09-01 20:08:17
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue3-Wallet-demo/src/views/WalletConnect.vue
 * @version: 
-->
<template>
  <div class="WalletConnect">
    <h1>This is an WalletConnect page-{{ ID }}</h1>
    <button>Walletconnect</button>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
const projectId = process.env.VUE_APP_PROJECTID;
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set');
}

onMounted(() => {});
</script>
