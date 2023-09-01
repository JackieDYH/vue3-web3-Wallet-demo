<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-09-01 15:22:17
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue3-Wallet-demo/src/views/MetaMask.vue
 * @version: 
-->
<template>
  <div class="MetaMask">
    <h1>This is an MetaMask page</h1>
    <button @click="connectMetaMask">连接MetaMask</button>
    <button @click="sendTransaction">发送交易</button>
  </div>
</template>
<script setup>
// 导入ethers.js库，并创建一个ethers.providers.Web3Provider实例
// import { ethers } from 'ethers';
// const provider = new ethers.providers.Web3Provider(window.ethereum);

// 在用户点击登录按钮或者触发登录事件时，调用provider实例的getSigner()方法获取用户的签名对象。
const connectMetaMask = async () => {
  try {
    // eth_requestAccounts是MetaMask的请求方法，用于请求用户授权连接应用程序
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const signer = provider.getSigner();
    // 签名对象可用于执行以太坊交易或其他操作
    console.log('已连接到MetaMask', signer);
  } catch (error) {
    console.error('连接MetaMask失败', error);
  }
};

// 使用signer对象来执行以太坊交易、查询账户信息等
const sendTransaction = async () => {
  const transaction = await signer.sendTransaction({
    to: '0x1234567890abcdef...',
    value: ethers.utils.parseEther('1.0')
  });
  console.log('交易已发送', transaction);
};
</script>
