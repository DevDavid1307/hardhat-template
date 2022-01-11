import { task } from 'hardhat/config'

import { Greeter__factory } from '../../src/types/factories/Greeter__factory'

task('deploy:greeter')
    .addParam('address', 'contract address')
    .addParam('greeting', 'Say hello')
    .setAction(async ({ address, greeting }, { ethers }) => {
        const signers = await ethers.getSigners()
        const greeter = Greeter__factory.connect(address, signers[0])

        console.log(await greeter.setGreeting(greeting))
    })
