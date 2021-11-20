// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


// in truffle console
// web3.eth.getStorageAt("0xC82ABf1E5619ec5cA9a594Da6eF8b0A3c2911cE2", 0)
contract Storage {
  //maping storage
  // keccak256(key . slot) => gets position of storage
  mapping(uint => uint) public aa;    // slot 0
  mapping(address => uint) public bb; // slot 1
  
  // dynamic array
  // keccak256(slot) + index of the item
  uint[] public cc; // slot 2




  uint8 public a = 7; // 1byte
  uint16 public b = 10; // 2byte
  address public c = 0x4fAbfbc310B6c8C6D276937B7D5aDaa00BFD2497; // 20byte
  bool d = true; //1bye
  uint64 public e = 15; //8byte
  // 32 bytes total values stored in slot 0 => mapping now slot 3
  // 0x0f 01 4fabfbc310b6c8c6d276937b7d5adaa00bfd2497 000a 07
  
  
  uint256 public f = 200; // 32 bytes => slot 1 0xc8 => mapping now slot 4
  
  uint8 public g = 40; // 1byte => slot 2 0x28 => mapping now slot 5

  uint256 public h = 789; //32 bytes => slot3 0x0315 => mapping now slot 6


  constructor() {
    cc.push(1);
    cc.push(10);
    cc.push(100);


    aa[2] = 4;
    aa[3] = 10;

    bb[0x4fAbfbc310B6c8C6D276937B7D5aDaa00BFD2497] = 100;
  }
}

// 1st 32bytes mapping key - 2nd 32 bbytes keeping slot 
// 0x00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000
// kessack abbb5caa7dda850e60932de0934eb1f9d0f59695050f761dc64e443e5030a569

// 0x00000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000
// 101e368776582e57ab3d116ffe2517c0a585cd5b23174b01e275c2d8329c3d83

// 0x0000000000000000000000004fAbfbc310B6c8C6D276937B7D5aDaa00BFD24970000000000000000000000000000000000000000000000000000000000000001
// 040e28d65db9ad15012c7d5debbb6c6643abc647f6f827f6be787a3766cd26d1

// 0000000000000000000000000000000000000000000000000000000000000002
// keccak value 405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace
// decimall value of keccask value: 29102676481673041902632991033461445430619272659676223336789171408008386403023 (+1)
// web3.eth.getStorageAt("0xc84B87619597bffB40b4B75eb69c3378eFbDF9A3", "0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace")
    // returns 0x01 which is the value pushed from cc[]array
