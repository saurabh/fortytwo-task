import {
	mainnet,
	polygon,
	sepolia,
	polygonMumbai,
	polygonZkEvm,
	polygonZkEvmTestnet,
	bsc,
	bscTestnet,
	arbitrum,
	arbitrumGoerli,
} from 'wagmi/chains';

export const ETH_CHAINS = [
	mainnet,
	polygon,
	sepolia,
	polygonMumbai,
	polygonZkEvm,
	polygonZkEvmTestnet,
	bsc,
	bscTestnet,
	arbitrum,
	arbitrumGoerli,
];
export const WALLET_CONNECT_PROJECT_ID =
	process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '';
