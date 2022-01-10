# 用到的开发包

-   [TypeChain](https://github.com/ethereum-ts/TypeChain): 合约生成 TS 类型，方便调用的时候提示
-   [Solhint](https://github.com/protofire/solhint): linter
-   [EthersJS](https://github.com/ethers-io/ethers.js/): web3 工具包
-   [Waffle](https://github.com/EthWorks/Waffle): 编写合约测试
-   [Solcover](https://github.com/sc-forks/solidity-coverage): 测试覆盖率
-   [Prettier Plugin](https://github.com/prettier-solidity/prettier-plugin-solidity): 代码美化, 可以和 solhint 整合
-   [Commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-husky): git commit message 格式规范

# 参考文章和项目

-   [https://github.com/paulrberg/solidity-template](https://github.com/paulrberg/solidity-template)
-   [搭建 Hardhat-TS 环境](https://rahulsethuram.medium.com/the-new-solidity-dev-stack-buidler-ethers-waffle-typescript-tutorial-f07917de48ae)
-   [Hardhat-TypeChain 配置](https://github.com/dethcrypto/TypeChain/tree/master/packages/hardhat)
-   [tsconfig 配置](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

# Dot 文件

-   .solhint.json: solhint 配置文件
-   .solhintignore: solhint 忽略文件
-   .prettierrc.json: prettier 配置文件
-   .prettierignore: prettire 忽略文件
-   .mocharc.json: mocha 配置文件
-   .editorconfig: 不同编辑器和开发环境统一风格，vscode 内置了检测, idea 应该要装插件

# VSCode 插件

-   [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity): Solidity 语言支持
-   [Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer): 左侧测试 UI Tab
-   [Mocha Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter): 配合 Test Explorer UI 使用

# Tips

-   vscode 中格式化如果没反应，随便找个文件，运行 Format 命令，会提示选择 Format 工具

# TODO

-   [ ] solcover 覆盖率配置
-   [ ] 优化 tsconfig 配置
-   [ ] 优化 hardhat.config.ts 配置
