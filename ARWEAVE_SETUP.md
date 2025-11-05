# Environment Variables for Arweave Upload

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Solana RPC URL (optional - defaults to mainnet)
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com

# Solana Private Key (optional - will generate new wallet if not provided)
# Format: Base58 encoded private key
SOLANA_PRIVATE_KEY=your_base58_private_key_here
```

## Getting a Solana Private Key

### Option 1: Generate a new wallet
If you don't provide `SOLANA_PRIVATE_KEY`, the API will generate a new wallet automatically.

### Option 2: Use an existing wallet
1. Export your private key from Phantom, Solflare, or another Solana wallet
2. Convert it to Base58 format
3. Add it to your `.env.local` file

## Funding Your Wallet

To upload to Arweave, you need SOL in your wallet:
1. Copy your wallet address from the error message or logs
2. Send at least 0.01 SOL to this address
3. You can buy SOL on exchanges like Coinbase, Binance, etc.

## Security Note

Never commit your `.env.local` file to version control. It contains sensitive private keys.
