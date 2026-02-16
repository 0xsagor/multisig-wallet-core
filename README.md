# Multi-Signature Wallet Core

A robust and secure smart contract designed for organizational fund management. This MultiSig wallet requires a predefined number of owners to confirm a transaction before it can be executed on the blockchain.

## Features
* **Threshold Security:** Set a required number of confirmations (e.g., 2-of-3 or 3-of-5).
* **Transaction Lifecycle:** Submit, confirm, revoke, and execute transactions.
* **Asset Support:** Handles ETH/Native token transfers and arbitrary contract calls.
* **Transparent Auditing:** All transaction proposals and confirmations are emitted as events.

## Workflow
1. **Submit:** An owner proposes a transaction.
2. **Confirm:** Other owners provide their digital signatures/confirmations.
3. **Execute:** Once the threshold is met, any owner can trigger the final execution.

## Technical Details
* **Solidity Version:** 0.8.20
* **Design Pattern:** Iterative confirmation tracking with mapping-based security.
