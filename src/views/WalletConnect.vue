<!--
 * @Author: Jackie
 * @Date: 2023-09-01 15:05:56
 * @LastEditTime: 2023-09-01 18:04:49
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
const ID = process.env.VUE_APP_PROJECTID;
onMounted(() => {});
</script>
