import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Welcome() {
	return (
		<div className='flex justify-center md:pl-48 md:p-52 py-12 px-4 text-left'>
			<div className='flex justify-center flex-col'>
				<h1 className='text-3xl sm:text-5xl text-white py-1'>
					Send Crypto <br /> across the world.
				</h1>
				<p className='my-5 text-white font-light md:w-9/12 w-11/12'>
					Explore the crypto world by connecting your wallet here.
				</p>
				{/* <ConnectButton /> */}
				<w3m-button />
			</div>
		</div>
	)
}
