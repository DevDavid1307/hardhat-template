import { task } from 'hardhat/config'

import { Greeter__factory } from '../../src/types/factories/Greeter__factory'

task('greeter:greet', 'call greet function')
    .addParam('address', 'contract address')
    .setAction(async ({ address }, { ethers }) => {
        const signers = await ethers.getSigners()
        const greeter = Greeter__factory.connect(address, signers[0])

        console.log(await greeter.greet())
    })
