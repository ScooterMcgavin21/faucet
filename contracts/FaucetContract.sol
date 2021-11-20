// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
    uint public numOfFunders;
    mapping(uint => address) private funders;
    // private -> can be accesible only within the smart contract
    // internal -> can be accesible within smart contract and also derived smart contract
    receive() external payable {}
    
    function addFunds() external payable {
        uint index = numOfFunders++;
        funders[index] = msg.sender;
    }

    function getAllFunders() external view returns (address[] memory) {
        address[] memory _funders = new address[](numOfFunders);
        // loop to iterate numOfFunders
        for (uint i = 0; i < numOfFunders; i++){
            _funders[i] = funders[i];
        }
        return _funders;
    }
    
    // function getAllFunders() public view returns(address[] memory) {
    //     return funders;
    // }

    // function to get funder at a specific index
    function getFunderAtIndex(uint8 index) external view returns(address) {
        // address[] memory _funders = getAllFunders();
        // return _funders[index];
        return funders[index];
    } 
}
    // recieve function called when you make a transaction tx without a specified name
    // External function are part of the ccontract interface, i.e can be called via contracts and other tx
    // Block info
        // Nonce - a hash that when combined with the minHash proofs that
        // the block has gone through proof of work(POW)
        // 8 bytes => 64 bits

        // truffle console
        // const instance = await Faucet.deployed()
        // instance.addFunds({from: accounts[0], value: "200000000"})
        // instance.getFunderAtIndex(0)
        // instance.getAllFunders()

    // view - function will not alter the storage state
    // pure - wont even read the storage state

    // Transactions(generate state changes) and require gas fee
    // read only call, no gas fee
    
    // JSON-RPC http calls to talk to node on the network 
    
    
