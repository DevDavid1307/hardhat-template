import '@typechain/hardhat'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-solhint'
import { HardhatUserConfig } from 'hardhat/types'

// hardhat config
const config: HardhatUserConfig = {
    solidity: {
        compilers: [{ version: '0.8.6' }],
    },
    typechain: {
        outDir: 'src/types',
        target: 'ethers-v5',
    },
}

export default config
