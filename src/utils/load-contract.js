var contract = require("@truffle/contract");
// read contract name and make request to endpoint of public folder
export const loadContract = async (name) => {
  const res = await fetch(`/contracts/${name}.json`)
  const Artifact = await res.json()
  contract(Artifact)
  
}
