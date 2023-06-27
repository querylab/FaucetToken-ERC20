import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import faucetContract from "./ethereum/faucet";
// eslint-disable-next-line
import React, { Component } from 'react'

import logoImage from './images/color1.png';

import ParticlesBg from 'particles-bg'
import ReCAPTCHA from "react-google-recaptcha";





function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState();
  const [fcContract, setFcContract] = useState();
  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState("");
  const [transactionData, setTransactionData] = useState("");
  const [isButtonHoveredtemp1, setIsButtonHoveredtemp1] = useState(false); // Nuevo estado para controlar si el botón está siendo seleccionado
  const [isButtonHoveredtemp2, setIsButtonHoveredtemp2] = useState(false); // Nuevo estado para controlar si el botón está siendo seleccionado

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    // eslint-disable-next-line
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_requestAccounts", []);
        /* get signer */
        setSigner(provider.getSigner());
        /* local contract instance */
        setFcContract(faucetContract(provider));
        /* set active wallet address */
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    // eslint-disable-next-line
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          /* get signer */
          setSigner(provider.getSigner());
          /* local contract instance */
          setFcContract(faucetContract(provider));
          /* set active wallet address */
          setWalletAddress(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    // eslint-disable-next-line
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  const getOCTHandler = async () => {
    setWithdrawError("");
    setWithdrawSuccess("");
    try {
      const fcContractWithSigner = fcContract.connect(signer);
      const resp = await fcContractWithSigner.requestTokens();
      setWithdrawSuccess("Enjoy your Particles Tokens!");
      setTransactionData(resp.hash);
    } catch (err) {
      setWithdrawError(err.message);
    }
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <nav className="navbar" style={{
        border: '8px solid #f7c04a',
        borderRadius: '20px',
        color: '#fff',
        padding: '30px',
        marginBottom: '2px'
      }}>


        <ParticlesBg num={250} type="thick" bg={true} />


        <div className="container">
          <img src={logoImage} alt="Logo" className="navbar-logo" style={{ width: '800px', height: '100px', marginLeft: "200px", marginTop: "24px" }} />
          <div className="navbar-brand">
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end is-align-items-center">

            <button
 className={`button ${isButtonHoveredtemp2 ? 'button-hovered' : ''}`}  onClick={connectWallet}
  style={{
    border: '0px solid #f7c04a',
    borderRadius: '20px',
    color: '#f7c04a',
    padding: '20px',
    fontWeight: 'bold',
    marginBottom: '2px',
    backgroundColor: isButtonHoveredtemp2 ? '#f7c04a' : 'transparent',
    transition: 'background-color 0.3s ease' // Añadida transición suave al cambio de color de fondo
  }}
  onMouseEnter={() => setIsButtonHoveredtemp2(true)}
  onMouseLeave={() => setIsButtonHoveredtemp2(false)}
>
  <span className="is-link has-text-weight-bold">
    {walletAddress && walletAddress.length > 0
      ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}`
      : "Connect Wallet"}
  </span>
</button>


            </div>
          </div>
        </div>






        
      </nav>
      <section className="hero is-fullheight" >
        <div className="faucet-hero-body">
          <div className="container has-text-centered main-content">
            <h1 className="title is-1">Particles Token</h1>
            <p className="title is-5">Fast and Reliable. 50 PTF/day.</p>
            

            <div className="mt-5">
              {withdrawError && (
                <div className="withdraw-error">{withdrawError}</div>
              )}
              {withdrawSuccess && (
                <div className="withdraw-success">{withdrawSuccess}</div>
              )}
            </div>
            <div className="box address-box" style={{
              border: '7px solid #f7c04a',
              borderRadius: '20px',
              fontWeight: 'bold',
            }}>
              <div className="columns">
                <div className="column is-four-fifths">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Enter your wallet address (0x...)"
                    defaultValue={walletAddress}
                  />
                </div>
                <div className="column">

                  <button style={{
        border: '4px solid #f7c04a',
        borderRadius: '20px',
        color: '#333',
        padding: '20px',
        marginBottom: '20px',
        transition: 'background-color 0.3s ease'
      }}
                    className={`button ${isButtonHoveredtemp1 ? 'button-hovered' : ''}`}
                    onClick={getOCTHandler}
                    disabled={walletAddress ? false : true}
                    onMouseEnter={() => setIsButtonHoveredtemp1(true)}
                    onMouseLeave={() => setIsButtonHoveredtemp1(false)}
                  > 
                  <ParticlesBg type="color" bg={true} />

                    Send Me PTF ₿⚡

                  </button>

                 
                </div>
              </div>

              ✅ You're an active Particle Faucet user! Enjoy 50 PTF Tokens when you make a request.
              <br />
              <br />
              <br />

              <ReCAPTCHA
                sitekey="6LfLjckmAAAAAHnMZaen4b3XrWLS5BPnbWv28GRi"
                onChange={onChange}
              />


              <article className="panel is-grey-darker" style={{
        border: '4px solid #fff',
        borderRadius: '20px',
        color: '#333',
        padding: '20px',
        marginBottom: '20px',
        transition: 'background-color 0.3s ease'
      }}>
                <p className="panel-heading" >Transaction Data</p>
                <div className="panel-block">
                  <p>
                    {transactionData
                      ? `Transaction hash: ${transactionData}`
                      : "--"}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>



      <footer style={{ textAlign: "center", marginTop: "50px" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <a href="https://github.com/querylab" target="_blank" rel="noopener noreferrer">
        <img src="https://i.imgur.com/iywAlED.png" width={30} alt="GitHub" />
      </a>
    
      <p style={{ color: "white" ,fontWeight: "bold", marginTop: "10px" }}>
        Made with <span role="img" aria-label="love">❤️</span> by querylab
      </p>
    </div>
  </footer>



    </div>
  );
}

export default App;
