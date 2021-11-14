// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
    // storage variables
    // recieve function called when you make a transaction tx without a specified name
    // External function are part of the ccontract interface, i.e can be called via contracts and other tx
    receive() external payable {}
    //const instance = await Faucet.deployed()
    function addFunds() external payable {}
    // view - function will not alter the storage state
    // pure - wont even read the storage state

    // Transactions(generate state changes) and require gas fee
    // read only call, no gas fee
    function justTesting() external pure returns(uint) {
        return 2+2;
    }

    // JSON-RPC http calls to talk to node on the network 
    
    
    
}

    // Block info
        // Nonce - a hash that when combined with the minHash proofs that
        // the block has gone through proof of work(POW)
        // 8 bytes => 64 bits

        // truffle console
        // const instance = await Faucet.deployed()
