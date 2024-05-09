import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
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
} from 'wagmi/chains'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'

const config = getDefaultConfig({
	appName: 'RainbowKit App',
	projectId: 'Project_ID',
	chains: [
		mainnet,
		goerli,
		bsc,
		polygon,
		optimism,
		arbitrum,
		base,
		avalanche,
		...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
	],
	ssr: true,
})

const client = new QueryClient()

createWeb3Modal({
	wagmiConfig: config,
	projectId: 'projectid',
	enableAnalytics: true, // Optional - defaults to your Cloud configuration
	enableOnramp: true, // Optional - false as default
})

function Web3ModalProvider({ Component, pageProps }: AppProps) {
	// const initialState = cookieToInitialState(config, headers().get('cookie'))

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={client}>
				<RainbowKitProvider>
					<Component {...pageProps} />
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}

export default Web3ModalProvider
