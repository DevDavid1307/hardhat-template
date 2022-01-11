/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c8238038062000c82833981810160405281019062000037919062000284565b6200006760405180606001604052806022815260200162000c6060229139826200008760201b620001ce1760201c565b80600090805190602001906200007f92919062000156565b5050620004f1565b620001298282604051602401620000a092919062000316565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200012d60201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b828054620001649062000402565b90600052602060002090601f016020900481019282620001885760008555620001d4565b82601f10620001a357805160ff1916838001178555620001d4565b82800160010185558215620001d4579182015b82811115620001d3578251825591602001919060010190620001b6565b5b509050620001e39190620001e7565b5090565b5b8082111562000202576000816000905550600101620001e8565b5090565b60006200021d62000217846200037a565b62000351565b9050828152602081018484840111156200023c576200023b620004d1565b5b62000249848285620003cc565b509392505050565b600082601f830112620002695762000268620004cc565b5b81516200027b84826020860162000206565b91505092915050565b6000602082840312156200029d576200029c620004db565b5b600082015167ffffffffffffffff811115620002be57620002bd620004d6565b5b620002cc8482850162000251565b91505092915050565b6000620002e282620003b0565b620002ee8185620003bb565b935062000300818560208601620003cc565b6200030b81620004e0565b840191505092915050565b60006040820190508181036000830152620003328185620002d5565b90508181036020830152620003488184620002d5565b90509392505050565b60006200035d62000370565b90506200036b828262000438565b919050565b6000604051905090565b600067ffffffffffffffff8211156200039857620003976200049d565b5b620003a382620004e0565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620003ec578082015181840152602081019050620003cf565b83811115620003fc576000848401525b50505050565b600060028204905060018216806200041b57607f821691505b602082108114156200043257620004316200046e565b5b50919050565b6200044382620004e0565b810181811067ffffffffffffffff821117156200046557620004646200049d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61075f80620005016000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610057575b600080fd5b61005560048036038101906100509190610445565b610075565b005b61005f61013c565b60405161006c91906104c7565b60405180910390f35b610122604051806060016040528060238152602001610707602391396000805461009e90610620565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610620565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b50505050508361026a565b8060009080519060200190610138929190610332565b5050565b60606000805461014b90610620565b80601f016020809104026020016040519081016040528092919081815260200182805461017790610620565b80156101c45780601f10610199576101008083540402835291602001916101c4565b820191906000526020600020905b8154815290600101906020018083116101a757829003601f168201915b5050505050905090565b61026682826040516024016101e49291906104e9565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610309565b5050565b61030483838360405160240161028293929190610520565b6040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610309565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461033e90610620565b90600052602060002090601f01602090048101928261036057600085556103a7565b82601f1061037957805160ff19168380011785556103a7565b828001600101855582156103a7579182015b828111156103a657825182559160200191906001019061038b565b5b5090506103b491906103b8565b5090565b5b808211156103d15760008160009055506001016103b9565b5090565b60006103e86103e384610591565b61056c565b905082815260208101848484011115610404576104036106e6565b5b61040f8482856105de565b509392505050565b600082601f83011261042c5761042b6106e1565b5b813561043c8482602086016103d5565b91505092915050565b60006020828403121561045b5761045a6106f0565b5b600082013567ffffffffffffffff811115610479576104786106eb565b5b61048584828501610417565b91505092915050565b6000610499826105c2565b6104a381856105cd565b93506104b38185602086016105ed565b6104bc816106f5565b840191505092915050565b600060208201905081810360008301526104e1818461048e565b905092915050565b60006040820190508181036000830152610503818561048e565b90508181036020830152610517818461048e565b90509392505050565b6000606082019050818103600083015261053a818661048e565b9050818103602083015261054e818561048e565b90508181036040830152610562818461048e565b9050949350505050565b6000610576610587565b90506105828282610652565b919050565b6000604051905090565b600067ffffffffffffffff8211156105ac576105ab6106b2565b5b6105b5826106f5565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b82818337600083830152505050565b60005b8381101561060b5780820151818401526020810190506105f0565b8381111561061a576000848401525b50505050565b6000600282049050600182168061063857607f821691505b6020821081141561064c5761064b610683565b5b50919050565b61065b826106f5565b810181811067ffffffffffffffff8211171561067a576106796106b2565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f830116905091905056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a2646970667358221220d214dabfb2685c90793905faa09f969e181bb7d097f8624d36f364dcbeed8e0a64736f6c634300080600334465706c6f79696e67206120477265657465722077697468206772656574696e673a";

type GreeterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GreeterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Greeter__factory extends ContractFactory {
  constructor(...args: GreeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
