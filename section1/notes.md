# Section 1 - Lesson notes

## History 
Bitcoin whitepaper October 31 2008

Ethereum whitepaper December 2013

## Ethereum
Smart contract is a piece of code that lives in the blockchain

Smart contracts are core of Ethereum

Ethereum is used to build more complex applications

## Ethereum network
One main Ethereum networks composed of several nodes (computers / machine running an Ethereum client)

Other networks exist for instance for tests, ...

Not only one Ethereum network but many

People interact with the network
Two kind of population: Develope§r (code) / Customers

## Account
An account on the Ethereum network is composed of 3 information:
- Account Address
- Public key
- Private key

An account is shared across all Ethereum networks

## Transations
Transaction created and sent to the Ethereum network (rinkeby test network in that case) with web3
The transaction goes the a specific node first. This is that node that is responsible to communicate with the rest of the network
The node has the entire copy of the blockchain
This is the validation logic (validation of a block of transaction by the node) that actually takes time. This is called mining
Hash is a fingerprint of some digital data. SHA 256 is used

A block is composed of:
- Block number
- Nonce
- Data
- Hash of all 4 previous data preceded by four 0 > 0000

Hash not starting with 0000 is not considered as signed and thus is considered as invalid
The aim of mining is the way we find an appropriate nonce that result in a hash starting with four 0000

A block chain is a chain of block where each block contains a reference to the previous block (its hash)
When re-mining a block, the change is compared with the other nodes in registered in the network and as the majority wins the change is denied

## Block time
Time to generate a nonce that gives us a hash that is when converted to decimal is less or equal to a target value
The network is trying to keep block time close to 15s adjusting target value every time a new block has been calculated

## Smart contract
Kind of account but controlled by code instead of being controlled by human

Smart Contract properties:
- Balance
- Storage
- Code

Smart Contract account is only stored and visible in one Ethereum network (different from external accounts as human accounts)
Contract source is stored on a computer
A contract instance is created in a specific network thanks to the deployment of the Contract Source
Constract Source is like a class that can lead to several instances

## Solidity Programming Language
.sol file, close to JS, Strongly type
Contract Definition > Solidity Compiler > Byte code for deployment + Application Binary Interface (ABI)
ABI is really important for applications that interact with the deployed contract

## Functions declaration
Common functions types
public: anyone can call this function
private: only the current contract can call this function
view, constant: return data but do not modify contract data
pure: do not modify or read contract data
payable: need to send ether to call this function

## Testing with remix
Remix contains a in browser fake ethereum network
Remix compiles contract source and deploy contract instance into this fake network

## Redeploying contracts
If you modify your contract source you need to redeploy your contract (create a new instance of that contract)

## Running functions
Any time when need to modify data in the blockchain, we have to submit a transaction
If there is a transaction, then we need to wait for the mining process to complete (see block time)
Two ways of running Contract functions:
- calling a function: cannot modify the contract data, runs instantly, can return data, free!
- sending a transaction to a function: can modify contract data, takes time to execute, returns transaction hash, costs money

## Wei vs Ether
Wei is a fraction of ether.
Wei minimum amount is 1
Wei is a unit of measurement of ether

## Gas
The amount of money someone has to pay in order to run your contract code.
When you start a transaction on Ethereum, you have to pay for it

## Mnemonic phrase
In the future, you may have several digital Ethereum accounts.
For each account, you have to memorize: the account address, private and public keys
Very difficult to remember and security critical when written on a paper.
This is were twelve words mnemonic comes in with BIP39 mnemonic algorithm


