var contract = require("@truffle/contract");

// read contract name and make request to endpoint of public folder
export const loadContract = async (name, provider) => {
  const res = await fetch(`/contracts/${name}.json`)
  const Artifact = await res.json()

  const _contract = contract(Artifact)
  _contract.setProvider(provider)
  
  //instancce
  let deployedContract = null
  try {
    deployedContract = await _contract.deployed()
  } catch {
    console.error('Connected to the wrong network')
  }

  return deployedContract
  
}
