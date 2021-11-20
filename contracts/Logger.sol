pragma solidity >=0.4.22 <0.9.0;
// Abstract Class 
// Its a way for a dev to say that any child of 
// "any child of the abstract contract has to implment specified methods"
abstract contract Logger {
  uint public testNum;

  constructor() {
    testNum = 1000;
  }
  function emitLog() public pure virtual returns(bytes32);

  function test3() internal pure returns(uint) {
    return 100;
  }

  function test5() external pure returns(uint) {
    test3();
    return 10;
  }
}
