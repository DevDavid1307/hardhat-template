import { task } from 'hardhat/config'
import { TaskArguments } from 'hardhat/types'

// Run: hh deploy:Greeter --greeting david
// Result: david
task('deploy:Greeter')
    .addParam('greeting', 'Say hello')
    .setAction(async (args: TaskArguments) => {
        console.log(args.greeting)
    })
