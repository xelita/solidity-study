# Section 2 - Lesson notes

## Contract deployment
To deploy contract we need to compile contract source with the solidity compiler.
This compilations gives us the contract bytecode plus the ABI.
The contract bytecode is deployed on some Ethereum network.

Truffle is a tool for the development of Ethereum contracts.
Truffle deal with contract creation, testing and deployment.

## Node.js compiler
We used solc as node js compiler.

## Testing 
We perform functional tests on our contract before deploying.
After compiling de contract we need to deploy it on a local test network (Ganache for instance).
To test the freshly deployed contract we use web3 through the ABI

## Web3
V0.x.x: primitive interface only callbacks available
V1.x.x: Support for promises + async / wait
Prefer using v1.x.x version

## Mocha
Testing framework for JS code for frontend, backend, Ethereum
Testing a contract with Mocha implies the following steps to be executed:
- mocka starts
- contract deployment on a local test network (for instance Ganache): beforeEach
- contract manipulation: it
- assertions about the contract: it 

## Deploy contract with Web3
'deploy' function create a deployed contract which is not deployed into the Ethereum blockchain
this is the 'send' function that actually deploys the contract
With web 3 you can deploys contract but also interacts with existing contract

Several types of providers exist:
- Websocket
- Http
- Ipc

## Deploying on the Rinkeby network
Using Infura API you can deploy contract on an Infura Node that takes part to the Rinkeby network
Infura just faciliate deployment on Rinkeby network