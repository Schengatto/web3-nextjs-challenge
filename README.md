# Full-Stack Task

### Requirements

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

### Deliverables

- Hosted URL
- GitHub repository URL