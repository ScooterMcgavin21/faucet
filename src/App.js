import detectEthereumProvider from '@metamask/detect-provider';
import { useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";
import { loadContract } from './utils/load-contract';

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null
  })
  
  const [balance, setBalance] = useState(null)
  const [account, setAccount] = useState(null)
  const [shouldReload, reload] = useState(false)

  
  // Helper function to toggle false true
  const reloadEffect = () => reload(!shouldReload)
  /**
   * with metamask we have an access to window.ethereum & to window.web3
   * metamask injects a global API into website
   * this API allows websites to request users, accounts, read data to blockchain
   * sign messages and transactions
   */
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider()
      const contract = await loadContract('Faucet', provider)
      if (provider) {
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract
        })
      } else {
        console.error("Please, install Metamask.")
      }
    }

    loadProvider()
  }, [])

  /** Get balance useEffect function
   * 
   */
  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api
      const balance = await web3.eth.getBalance(contract.address)
      setBalance(web3.utils.fromWei(balance, 'ether'))
    }
    web3Api.contract && loadBalance()
  }, [web3Api, shouldReload])
  /** 
   * get accounts only when web3Api is loaded
   * function called from ethApi to get acccounts
   * set to state account funccctoin with 1st item from account
   * reexecute component to get new account number
  */
  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts()
      setAccount(accounts[0])
    }

    web3Api.web3 && getAccount()
  }, [web3Api.web3])

  /**
   * Add funds function
   * call via browser 
   */
  const addFunds = useCallback(async () => {
    const { contract, web3 } = web3Api
    await contract.addFunds({
      from: account,
      value: web3.utils.toWei('1', 'ether')
    })
    // reload browser
    //window.location.reload()
    reloadEffect()
  }, [web3Api, account])

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="is-flex is-align-items-center">
            <span>
              <strong className="mr-2">Account: </strong>
            </span>
              { account ?
                <div>{account}</div> :
                <button
                  className="button is-small"
                  onClick={() =>
                    web3Api.provider.request({method: "eth_requestAccounts"}
                  )}
                >
                  Connect Wallet
                </button>
              }
          </div>
          <div className="balance-view is-size-2 my-4">
            Current Balance: <strong>{balance}</strong> ETH
          </div>
          <button
            onClick={addFunds}
            className="button is-link mr-2"
          >
              Donate: 1 Eth
          </button>
          <button
            className="button is-primary">Withdraw</button>
        </div>
      </div>
    </>
  );
}

export default App;
