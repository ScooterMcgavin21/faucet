// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


// in truffle console
// web3.eth.getStorageAt("0xC82ABf1E5619ec5cA9a594Da6eF8b0A3c2911cE2", 0)
contract Storage {
  uint8 public a = 7; // 1byte
  uint16 public b = 10; // 2byte
  address public c = 0x4fAbfbc310B6c8C6D276937B7D5aDaa00BFD2497; // 20byte
  bool d = true; //1bye
  uint64 public e = 15; //8byte
  // 32 bytes total values stored in slot 0
  // 0x0f 01 4fabfbc310b6c8c6d276937b7d5adaa00bfd2497 000a 07
  
  
  uint256 public f = 200; // 32 bytes => slot 1 0xc8
  
  uint8 public g = 40; // 1byte => slot 2 0x28

  uint256 public h = 789; //32 bytes => slot3 0x0315
}
