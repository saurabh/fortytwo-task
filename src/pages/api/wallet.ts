// import PulsarSDK, { ChainKeys } from 'pulsar_sdk_js'

// Assuming these are the types of data you expect from the API
export interface Balance {
  token: string;
  tokenPrice: string;
  amount: string;
}

// const chain = ChainKeys.ETHEREUM
const responses_list: Balance[] = []
const API_KEY = 'YOUR API KEY'

// MockPulsarSDK instead of the real PulsarSDK
class MockPulsarSDK {
  constructor(private apiKey: string) {}

  balances = {
    getWalletBalances: async function* (walletAddress: string) {
      console.log('walletAddress', walletAddress)
      // Mock data simulating API response
      const mockBalances: Balance[] = [
        { token: 'ETH', tokenPrice: '3000', amount: '5' },
        { token: 'DYM', tokenPrice: '8', amount: '40' },
        { token: 'UNI', tokenPrice: '15', amount: '400' },
        { token: 'USDC', tokenPrice: '1', amount: '5000' },
      ];

      for (const balance of mockBalances) {
        yield balance;
      }
    }
  }
}

// Use MockPulsarSDK instead of PulsarSDK
const sdk = new MockPulsarSDK(API_KEY)

export async function getWalletBalances(address: string) {
    const balances = sdk.balances.getWalletBalances(address)
    for await (const balance of balances) {
        responses_list.push(balance)
    }
    return responses_list;
}
