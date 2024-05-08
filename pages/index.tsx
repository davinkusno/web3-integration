import type { NextPage } from 'next'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
	return (
		<div className='gradient-bg-welcome min-h-screen'>
			{/* <Navbar /> */}
			<Welcome />
		</div>
	)
}

export default Home
