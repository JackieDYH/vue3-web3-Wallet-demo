<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-09-05 20:44:42
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue3-Wallet-demo/src/App.vue
 * @version: 
-->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/metamask">MetaMask</router-link> |
    <router-link to="/walletconnect">WalletConnect</router-link> |
    <router-link to="/particleconnevct">ParticleConnevct</router-link> |
    <router-link to="/usewagmi">UseWagmi</router-link> |
    <router-link to="/webmodal">WebModal</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
