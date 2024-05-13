import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import {
	arbitrum,
	base,
	mainnet,
	bsc,
	goerli,
	optimism,
	polygon,
	sepolia,
	avalanche,
	fantom,
	opBNB,
} from 'wagmi/chains'

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

const metadata = {
	name: 'Web3 Integration',
	description: 'Front End Web3 Integration',
	url: 'https://web3-integration-one.vercel.app/',
	icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const config = defaultWagmiConfig({
	chains: [
		mainnet,
		goerli,
		sepolia,
		bsc,
		opBNB,
		polygon,
		optimism,
		arbitrum,
		base,
		avalanche,
		fantom,
		...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
	],
	projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
	metadata,
	ssr: true,
})

const client = new QueryClient()

createWeb3Modal({
	wagmiConfig: config,
	projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
	enableAnalytics: true, // Optional - defaults to your Cloud configuration
	enableOnramp: true, // Optional - false as default
	defaultChain: mainnet,
	allowUnsupportedChain: true,
})

function Web3ModalProvider({ Component, pageProps }: AppProps) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={client}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</WagmiProvider>
	)
}

export default Web3ModalProvider
