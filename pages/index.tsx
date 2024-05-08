import type { NextPage } from 'next'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
	return (
		<div className='gradient-bg-welcome min-h-screen'>
			<Welcome />
		</div>
	)
}

export default Home
