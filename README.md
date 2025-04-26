# Hardhat Counter Project for Lisk Sepolia

This project demonstrates deploying a simple Counter smart contract to the Lisk Sepolia testnet using Hardhat. It includes a Counter contract with increment, decrement, and reset functionality, along with deployment scripts and tests.

## Project Structure

- `contracts/`: Contains the Solidity smart contracts
  - `Counter.sol`: A simple counter contract with increment, decrement, and reset functions
  - `Lock.sol`: Sample contract provided by Hardhat

- `scripts/`: Contains deployment scripts
  - `deploy.js`: Script to deploy the Counter contract to Lisk Sepolia

- `test/`: Contains test files for the contracts

## Setup

1. Install dependencies:
```shell
npm install
```

2. Create a `.env` file in the root directory with your private key:
```
PRIVATE_KEY=your_private_key_here
```

3. Compile the contracts:
```shell
npx hardhat compile
```

## Deployment

To deploy the Counter contract to Lisk Sepolia testnet:

```shell
npx hardhat run scripts/deploy.js --network liskSepoliaId
```

## Testing

Run tests with:

```shell
npx hardhat test
```

## Other Commands

```shell
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat node
```

## Lisk Sepolia Network

- Chain ID: 4202
- RPC URL: https://rpc.sepolia-api.lisk.com
- Block Explorer: https://sepolia-blockscout.lisk.com

## Resources

- [Hardhat Documentation](https://hardhat.org/docs)
- [Lisk Documentation](https://docs.lisk.com)
- [Ethers.js Documentation](https://docs.ethers.org)
