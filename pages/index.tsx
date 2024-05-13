import Head from 'next/head'
import type { NextPage } from 'next'
import Welcome from '../components/Welcome'

export const metadata = {
	name: 'Web3 Integration',
	description: 'Front End Web3 Integration',
	url: 'https://web3-integration-one.vercel.app/',
	icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Web3 Integration</title>
				<meta
					name='description'
					content='Integrating front end with Web3'
				/>
			</Head>
			<div className='gradient-bg-welcome min-h-screen'>
				<Welcome />
			</div>
		</>
	)
}

export default Home
