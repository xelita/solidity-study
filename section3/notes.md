# Section 3 - Lesson notes

## Basic solidity types
To store the address of the creator of the contract, Solidty provides the Address type.

Basic solidity types are:
- string
- bool
- int / uint
- fixed / ufixed
- Address

## Global variables

The msg global variable is always provided when calling a function or starting a transaction.
The msg global variable contains the following properties:
- data: data field of the call or transaction invoking the function
- gas: amount of gas available for the current function invocation
- sender: address of the account responsible for the function invocation
- value: amount of ether (in wei) along this function invocation

block is also a global variable filled with the information about the current block.
sha3 is another example of global variables or global functions

## Reference types

Reference types in solidity are:
- fixed array (cannot grow or shrink)
- dynamic array
- mapping
- struct

## Mappings
Collection of key value pairs.
All the keys have to be the same time as the values.

## Stucts
Collection of key value pairs.
Keys and values are not required to be of the same type.
Struct is used to represent an Object (class).

## Nested dynamic arrays
We cannot communicate with nested dynamic arrays between JS world and Solidity.
It is not a lack of Solidity neither a lack of JS where nested dynamic arrays exist.
It is a lack of the bridge between these two worlds.

strings are represented in Solidity as dynamic arrays so you cannot send an array of string from JS to Solidity.
This drawback can evolve in the future as development of the bridge is still is progress.

## Random number generation
There is no such thing as random number generator in Solidity.

## Address type
Address type is not just an address but also have several functions bound to it.
Transfer() function for instance allows sending ether from the current contract to the address.

## Function modifiers
Use to ensure DRY principle.
modifier <name>