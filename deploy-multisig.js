const hre = require("hardhat");

async function main() {
  const [deployer, owner2, owner3] = await hre.ethers.getSigners();
  const owners = [deployer.address, owner2.address, owner3.address];
  const required = 2;

  console.log("Deploying MultiSig Wallet...");
  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  const wallet = await MultiSig.deploy(owners, required);

  await wallet.waitForDeployment();
  console.log(`MultiSig deployed to: ${await wallet.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
