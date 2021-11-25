
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



// signed transaction 
// 15850ab5d04c0083041791941a2a1c938ce3ec39b6d47113c7955baa9dd454f280b90224993e1c420000000000000000000000000000000000000000000000000000000000073fd600000000000000000000000011c0dfa506db0e0d4672a739be91beb229d18ee3000000000000000000000000cc8fa225d80b9c7d42f96e9570156c65d6caaa250000000000000000000000000000000000000000000000000000000000000d1a00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000014a01602f64798e85f3871d0e02deda8759ee41375f3d68b23fe0c89a367d47a700410a3f2fa897a8804bb064812a41492135f5a8047b101964dd6f76c954dc0250e31c014dc1ac05e490d16aba5570fe299ac99bf472df74a58fed054490b1c2c2b54b943b8ec6388cf3f82d4bdee9f8c836b621741670bc5feed6691dd37a30bc9e8e9e1b015aad0f40f7cbcea63fd0cd29871cbf2a7f0270b29178f3eda67c03e49449b61d5adb33078c9b214e5101dc1a8957f163ef9ce4aad3197c91ae9d7cf85d9ba2561c01b205543e0b55611a49c388836e631b586f547968b8b3d7f609c72d583b93ce8a4d24df7e5f8c47b954461d281c2354308bdefa75e3e6843dfacc635dd3836b051b01acdbb612a111de738c71077f137306662b9327f2c8b739ea9b447fdb25ec3a271dd7078fca2a8b29f8ab57299336e424946352eb43aec1c58dfdde5c5bb32ae81c0000000000000000000000000000000000000000000026a094a311406440139d3aae964eceabc2ca738a27f693866541e8ec993aeb34a343a05be5bbd6aa5970dfd3e80ed58a45e435172eb7df59b3e3659a1bee6bcee837c5
const txParams2 = {
  nonce: "0x01",
  gasPrice: "0x0C4B201000",
  gasLimit: "0x5208",
  to: "0x9cbfd6ebdb9cfcccd6b043f43e524583486d455e",
  value: "0x0490283B23EC8F76",
  data: "0x"
}


const tx2 = new EthereumTx(
  txParams2, {chain: "mainnet"}
)

const privateKey = Buffer.from("f23450a4b023df60e71c6fe4116fd8fc49c5f39d11d0c8b9d420fbd912b33030", "hex")

tx2.sign(privateKey)

const key2 = tx2.getSenderPublicKey()
const address2 = tx2.getSenderAddress()
const isValid2 = tx2.verifySignature()

console.log("Public Key: ", key2.toString("hex"))
console.log("Address: ", address2.toString("hex"))
console.log("Is Valid: ", isValid2)
