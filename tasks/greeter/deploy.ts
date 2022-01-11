import { task } from 'hardhat/config'
import { TaskArguments } from 'hardhat/types'

import { Greeter } from '../../src/types/Greeter'
import { Greeter__factory } from '../../src/types/factories/Greeter__factory'

task('deploy:greeter')
    .addParam('greeting', 'Say hello')
    .setAction(async (args: TaskArguments, { ethers }) => {
        const greeterFactory = <Greeter__factory>await ethers.getContractFactory('Greeter')
        const greeter = <Greeter>await greeterFactory.deploy(args.greeting)

        await greeter.deployed()

        console.log('Greeter deployed at: ', greeter.address)
    })
