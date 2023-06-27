# FaucetToken-ERC20 🚰💰⚡

This project consists of a dApp Faucet that uses technologies such as Ethers.js and React.js to connect to a Metamask Wallet and allow users to obtain tokens for free. Hardhat and Solidity were used to develop the smart contracts, and the Sepolia Testnet was used for testing without incurring real costs. The dApp offers an intuitive interface where users can request tokens through a faucet and perform transactions by interacting with the smart contract.


## Setting Up
---
## 1. Clone the repository

## 2. Install dependencies

```bash
$ cd FaucetToken-ERC20
$ npm install 
```
## 3. Change variables in Files
```bash
# hardhat-contracts/hardhat.config.js
$ SEPOLIA_ALCHEMY_API_KEY
$ SEPOLIA_PRIVATE_KEY
# src/ethereum/faucet.js 
$ faucetContract
# hardhat-contracts/scripts/deployFaucet.js 
$ particlestoken

```
## 4. Deployment Solidity Contract Addresses
```bash
# Deployment Contract in folder hardhat-contracts
$ npx hardhat clean
$ npx hardhat compile
```


``` bash
$ npx hardhat run scripts/deploy.js --network sepolia
```
<a href="https://imgur.com/75mQoZd"><img src="https://i.imgur.com/75mQoZd.gif" title="source: imgur.com" /></a>

``` bash
#After deploying the particlestoken.sol replace this address in hardhat-contracts/scripts/deployFaucet.js file with the variable:

const particlestoken = await Faucet.deploy("0xD20ACA19f1018D45A0c08364246d24CA0063e946");


```

``` bash
# Once you deploy Faucet.sol replace that contract address faucet in src/ethereum/faucet.js 

$ npx hardhat run scripts/deployFaucet.js --network sepolia
```

<a href="https://imgur.com/pMfO2kO"><img src="https://i.imgur.com/pMfO2kO.gif" title="source: imgur.com" /></a>


``` bash
# Now you need to call the token contract in your Metamask wallet to have funds from the created token. After you get tokens now you need to send some tokens to the Faucet contract so that the contract can be fund.
```
<a href="https://imgur.com/wDzdUO4"><img src="https://i.imgur.com/wDzdUO4.gif" title="source: imgur.com" /></a>


## 5. Localhost Deployment

``` bash
# Run this on Parent folder FaucetToken-ERC20

$ npm start

http://localhost:3000/

```
<a href="https://imgur.com/YUDPqZu"><img src="https://i.imgur.com/YUDPqZu.gif" title="source: imgur.com" /></a>























