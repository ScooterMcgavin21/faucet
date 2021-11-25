
// 0xf86c01850c4b201000825208949cbfd6ebdb9cfcccd6b043f43e524583486d455e880490283b23ec8f768025a067da959a6d114d42016b5fb43ff8ae018efe6e4c784d40dfb2f2aad8fb2d4f6ca00b019b1e457b592e5bfd553e3b73742de625c7b65145494a57dbca17e5e9d842

// 0x
// f8 = f7 + length of payload in binary [bytes] > 
// 6c = 108 > length of payload 
// 01 = nonce

// 133  - 128 = 5bytes
// 0x85 - 0x80 = length of the string
// 85 0c4b201000 > extracted gas price

// 0x82 - 0x80 = 2bytes
// 82 5208 > gasLimit

// 0x94 - 0x80 = 20bytes
// 9cbfd6ebdb9cfcccd6b043f43e524583486d455e -2

// 0x88 - 080 = 8bytes

// 88 0490283b23ec8f76 - to

// 80 - data empty string / null 

// 0x25 - 1 byte is encodeing itself
// 25 -[v]

// a0 - 0x80 = 32bytes
// a0 67da959a6d114d42016b5fb43ff8ae018efe6e4c784d40dfb2f2aad8fb2d4f6c - [r]

// a0 0b019b1e457b592e5bfd553e3b73742de625c7b65145494a57dbca17e5e9d842 - [s]
//console.log('Hello World');
// 1 nibble = 4 bits
// 1 byte = 8 bits 

//const ethutil = require('ethereumjs-util')
const EthereumTx = require("ethereumjs-tx").Transaction

/**
 * Transaction paramaters
 */
const txParams = {
  nonce: '0x01',
  gasPrice: '0x0C4B201000',
  gasLimit: '0x5208',
  to: '0x9cbfd6ebdb9cfcccd6b043f43e524583486d455e',
  value: '0x0490283B23EC8F76',
  data: '0x', //nulll 
  v: '0x25',
  r: '0x67da959a6d114d42016b5fb43ff8ae018efe6e4c784d40dfb2f2aad8fb2d4f6c',
  s: '0x0b019b1e457b592e5bfd553e3b73742de625c7b65145494a57dbca17e5e9d842'
}

const tx = new EthereumTx(
  txParams, {chain: 'mainnet'}
)

const key = tx.getSenderPublicKey()
// keccak256(public key)
// d854623eb394bee7c483b540055b936d7603f0b12b980631884b0628bb10a86e
// address
// 0x055b936d7603f0b12b980631884b0628bb10a86e
const address = tx.getSenderAddress()
const isValid = tx.verifySignature()

console.log("Public Key: ", key.toString("hex"))
console.log("Address: ", address.toString("hex"))
console.log("Is Valid: ", isValid)
