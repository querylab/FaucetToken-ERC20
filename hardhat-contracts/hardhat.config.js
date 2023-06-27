require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers")
require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");



// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and replace "KEY" with its key
const SEPOLIA_ALCHEMY_API_KEY = "V8VbeuXIGks4glUYQupSV2wKYO7XCG5r"; //CHANGE YOUR API-KEY FROM ALCHEMY



// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

// My Private Key of My Wallet Sepolia Metamask
const SEPOLIA_PRIVATE_KEY = "Metamask wallet private key"; 



module.exports = {
  solidity: {
    compilers: [

        {
            version: "0.8.17",
        },


    ],

  },
  
  
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }

 
};
