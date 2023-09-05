<!--
 * @Author: Jackie
 * @Date: 2023-09-05 20:26:31
 * @LastEditTime: 2023-09-05 20:26:34
 * @LastEditors: Jackie
 * @Description: use-wagmi
 * @FilePath: /Vue3-Wallet-demo/src/views/UseWagmi.vue
 * @version: 
-->
<template>
  <div v-if="isConnected">
    Connected to {{ address }}
    <button @click="disconnect">Disconnect</button>
  </div>
  <button v-else @click="connect">Connect Wallet</button>
</template>
<script setup>
import { useAccount, useConnect, useDisconnect } from 'use-wagmi';
import { InjectedConnector } from 'use-wagmi/connectors/injected';

const { address, isConnected } = useAccount();
const { connect } = useConnect({
  connector: new InjectedConnector()
});
const { disconnect } = useDisconnect();
</script>
