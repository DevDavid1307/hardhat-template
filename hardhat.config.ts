import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-solhint'
import { HardhatUserConfig } from 'hardhat/types'

// load task
import './tasks/accounts'
import './tasks/deploy'

// hardhat config
const config: HardhatUserConfig = {
    solidity: {
        compilers: [{ version: '0.8.6' }],
    },
    typechain: {
        outDir: 'src/types',
        target: 'ethers-v5',
    },
    networks: {
        hardhat: {},
        ganache: {
            url: 'http://127.0.0.1:7545',
        },
    },
}

export default config
