const hre = require("hardhat");


async function main() {
  const ParticleToken = await hre.ethers.getContractFactory("particlestoken");
  const particles = await ParticleToken.deploy(100000000, 50);

 const address = await particles.getAddress();
 console.log("\n");
 console.log("**************************************************************************** \n");
console.log(`ParticlesToken Contract Address: ${address}`,"\n");
console.log("**************************************************************************** \n");

 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
