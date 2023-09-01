<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-09-01 18:17:28
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue3-Wallet-demo/src/views/MetaMask.vue
 * @version: 
-->
<template>
  <div class="MetaMask">
    <h1>This is an MetaMask page</h1>
    <button @click="getAddress">获取用户地址</button>
    <!-- <button @click="connectMetaMask">连接MetaMask</button>
    <button @click="sendTransaction">发送交易</button> -->
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
// import { ethers } from 'ethers';
// console.log('ethers', ethers);

// 获取用户钱包地址
const getAddress = async () => {
  // 一
  // const provider = window.ethereum;
  // if (typeof provider == 'undefined') {
  //   console.log('Please install MetaMask');
  //   return;
  // }
  // console.log('provider', provider);
  // const address = await provider.request({ method: 'eth_requestAccounts' });
  // console.log('address', address);
  // 获取签名
  // const signer = await provider.request({
  //   method: 'personal_sign',
  //   params: [address[0], '0x12323131231231231232']
  // });
  // console.log('signer', signer);
  // 二
  let signer = null;
  let provider;
  if (window.ethereum == null) {
    console.log('MetaMask not installed; using read-only defaults');
    provider = ethers.getDefaultProvider();
  } else {
    provider = new ethers.BrowserProvider(window.ethereum);
    // 获取地址
    signer = await provider.getSigner();
    // 获取签名
    let s = await signer.signMessage(
      'You are signing into abcdtest.link trading 003101'
    );
    console.log(s);
  }
  console.log('signer', signer.address, provider);
};

onMounted(() => {
  window.ethereum.on('accountsChanged', (accounts) => {
    // 处理账户变更事件
    console.log('账户地址已变更', accounts);
  });
});

onUnmounted(() => {
  console.log('销毁');
  // window.ethereum.removeListener('accountsChanged', (accounts) => {
  //   // 处理账户变更事件
  //   console.log('账户地址已变更-2', accounts);
  // });
});
</script>
