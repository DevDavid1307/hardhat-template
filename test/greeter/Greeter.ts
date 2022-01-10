import { expect } from 'chai'
import { ethers, waffle } from 'hardhat'
import type { Greeter } from '../../src/types/Greeter'
import HelloArtifact from '../../artifacts/contracts/Greeter.sol/Greeter.json'

describe('Greeter', () => {
    it('Print Message', async () => {
        const str = 'Hello World'

        // 获取signers
        const signers = await ethers.getSigners()

        // 部署合约
        const greeter = <Greeter>await waffle.deployContract(signers[0], HelloArtifact, [str])

        // 部署完毕
        await greeter.deployed()

        expect(await greeter.greet()).to.equal(str)
    })
})
