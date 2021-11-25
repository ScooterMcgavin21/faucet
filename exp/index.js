
// 0xf86c01850c4b201000825208949cbfd6ebdb9cfcccd6b043f43e524583486d455e880490283b23ec8f768025a067da959a6d114d42016b5fb43ff8ae018efe6e4c784d40dfb2f2aad8fb2d4f6ca00b019b1e457b592e5bfd553e3b73742de625c7b65145494a57dbca17e5e9d842

// 0xf86c01850c4b201000825208949cbfd6ebdb9cfcccd6b043f43e524583486d455e880490283b23ec8f7680
// 25
// a0 67da959a6d114d42016b5fb43ff8ae018efe6e4c784d40dfb2f2aad8fb2d4f6c
// a0 0b019b1e457b592e5bfd553e3b73742de625c7b65145494a57dbca17e5e9d842
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
