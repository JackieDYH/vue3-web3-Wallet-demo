/*
 * @Author: Jackie
 * @Date: 2023-09-05 20:35:00
 * @LastEditTime: 2023-09-05 20:35:03
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue3-Wallet-demo/src/utils/wallet.js
 * @version:
 */
// 钱包连接-
import { SignClient } from '@walletconnect/sign-client';
import { Web3Modal } from '@web3modal/standalone';

// 1. Define constants
const projectId = process.env.VUE_APP_PROJECTID;
const namespaces = {
  eip155: {
    methods: ['eth_sign'],
    chains: ['eip155:1'],
    events: ['accountsChanged']
  }
};

// 3. Create modal client
const web3Modal = new Web3Modal({
  projectId,
  standaloneChains: namespaces.eip155.chains
});
let signClient = undefined;

// 4. Initialise clients
export async function initClient() {
  setInterval(() => {
    console.log('keep alive');
  }, 2000);
  try {
    signClient = await SignClient.init({ projectId });
  } catch (err) {
    console.error(err);
  }
}

// 5. 打开钱包
export const openWallet = async () => {
  try {
    if (signClient) {
      const { uri, approval } = await signClient.connect({
        requiredNamespaces: namespaces
      });
      if (uri) {
        await web3Modal.openModal({ uri });
        await approval();
        web3Modal.closeModal();
      }
    }
  } catch (err) {
    console.error(err);
  }
};
