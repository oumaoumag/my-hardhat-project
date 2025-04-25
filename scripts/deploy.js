const hre = require("hardhat");

async function main() {
    try {
        // Get the signer
        const [deployer] = await hre.ethers.getSigners();
        console.log("Deploying contracts with the account:", deployer.address);
        console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

        // Get the contract factory
        console.log("Getting contract factory...");
        const Counter = await hre.ethers.getContractFactory("Counter");

        // Deploy the contract
        console.log("Deploying contract...");
        console.log("Gas price:", (await deployer.provider.getFeeData()).gasPrice.toString());
        const counter = await Counter.deploy();

        console.log("Transaction hash:", counter.deploymentTransaction().hash);

        // Wait for the contract to be deployed
        console.log("Waiting for deployment confirmation...");
        await counter.waitForDeployment();

        // Get the deployed contract address
        const counterAddress = await counter.getAddress();

        console.log("Counter deployed to:", counterAddress);
    } catch (error) {
        console.error("Detailed error:", error);
        throw error;
    }
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});