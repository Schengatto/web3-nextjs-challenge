# Full-Stack Task

## Info

This is a Next.js project that uses the library Web3 to interact with the MetaMask wallet and perform actions calling the smart contracts methods.

To be able to use this application you need to:

- install MetaMask on you browser ([link](https://metamask.io/download/))
- connect MetaMask to the Sepolia chain

### Example ERC20 Token

The application will allow you to interact with ERC20 tokens deployed in the Sepolia chain. For test purposes, you can use my own ERC20 token deployed at the address:
> 0x9982f9A3bA28c34aD03737745d956EC0668ea440

By selecting this token, the application will let you mint 100 tokens at time.

## Requirements

- Deploy and verify the following smart contract on the Sepolia Testnet.

```jsx
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DepositContract {
 
    event Deposit(address indexed depositor, address indexed token, uint256 amount);

    function deposit(address tokenAddress, uint256 amount) external {
        // Ensure the caller has approved this contract to spend the specified amount of tokens
        IERC20 token = IERC20(tokenAddress);
        require(token.transferFrom(msg.sender, address(this), amount), "Token transfer failed");

        emit Deposit(msg.sender, tokenAddress, amount);
    }

}
```

- Develop a frontend Next.js application to perform the following tasks:
    1. Enter the ERC20 token address.
    2. Show the current balance of the connected wallet for the given token address.
    3. Define the deposit amount.
    4. Transfer tokens from your wallet to the deployed smart contract.
- [Bonus] List the deposit history.

## GitHub Repository

<https://github.com/Schengatto/web3-nextjs-challenge>

## Online Demo

<https://main--lucent-croquembouche-bb774e.netlify.app> or <http://173.249.46.71:3000>

## Run with docker-compose

Open a terminal at the root path of this project and execute the following command:

> docker-compose up -d

Once the server is up you can access the URL <http://localhost:3000> using your browser.

## Run with node

Open a terminal at the root path of this project and execute the following commands:

> npm run install

> npm run build && npm run start

Once the server is up you can access the URL <http://localhost:3000> using your browser.
