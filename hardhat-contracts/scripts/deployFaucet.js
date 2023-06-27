const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const particlestoken = await Faucet.deploy("0xD20ACA19f1018D45A0c08364246d24CA0063e946"); //change particles token contract address

  const address = await particlestoken.getAddress();

  console.log("\n");
  console.log("**************************************************************************** \n");
 console.log(`Faucet Contract Address: ${address}`,"\n");
 console.log("**************************************************************************** \n");
 


  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
