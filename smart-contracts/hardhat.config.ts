import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-etherscan';
import '@nomicfoundation/hardhat-foundry';
import * as dotenv from 'dotenv';
import 'solidity-docgen';
dotenv.config();

// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';

const config: HardhatUserConfig = {
  defaultNetwork: 'testnet',
  networks: {
    hardhat: {},
    coreTestnet: {
      url: 'https://rpc.test2.btcs.network',
      accounts: [PRIVATE_KEY],
      chainId: 1114,
    },
    coreMainnet: {
      // core mainnet https://docs.coredao.org/docs/Dev-Guide/core-wallet-config
      url: 'https://rpc.coredao.org/',
      accounts: [PRIVATE_KEY],
      chainId: 1116,
    },
  },

  solidity: {
    version: '0.8.25',
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
};

export default config;
