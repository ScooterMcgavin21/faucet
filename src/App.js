import { useEffect, useState } from "react";
import Web3 from 'web3';
import './App.css';
function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null
  })
  // with metamask we have an access to window.ethereum & to window.web3
  // metamask injects a global API into website
  // this API allows websites to request users, accounts, read data to blockchain
  // sign messages and transactions
  useEffect(() => {
    const loadProvider = async () => {
      let provider = null;

      if (window.ethereum) {
        provider = window.ethereum;
        
        //request metamask to connect automatically
        try {
          await provider.enable();
        } catch {
          console.error('User denied acccounts access')
        }
      }
      else if(window.web3) {
        // legacy metamask
        provider = window.web3.currentProvider
      }
      else if (!process.env.production) {
        // ganashe
        provider = new Web3.providers.HttpProvider('http://localhost:7545')
      }

      setWeb3Api({
        web3: new Web3(provider),
        provider
      })

      // console.log(window.web3)
      // console.log(window.ethereum)
    }
    loadProvider() 
  }, [])

  console.log(web3Api.web3);
  return (
    <>
      <div className='faucet-wrapper'>
        <div className='faucet'>
          <div className='balance-view is size-2'>
            Current Balance: <strong>10</strong> ETH
          </div>
          <button className='btn mr-2'>Donate</button>
          <button className='btn'>Withdraw</button>
        </div>
      </div>
    </>
  );
}

export default App;


