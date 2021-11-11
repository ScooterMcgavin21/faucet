// deploying contract
const FaucetContract = artifacts.require("Faucet")
//truggle exports funcctions
module.exports = function(deployer) {
  deployer.deploy(FaucetContract)
}