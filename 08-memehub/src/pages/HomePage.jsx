import Container from 'react-bootstrap/Container'
import UploadMeme from '../components/UploadMeme'
import MemeGrid from '../components/MemeGrid'
import useMemes from '../hooks/useMemes'

const HomePage = () => {
	const memesQuery = useMemes()

	return (
		<Container className="py-3">
			<h1 className="display-1">😂</h1>

			<UploadMeme />

			<hr className='my-4' />

			<MemeGrid query={memesQuery} />
		</Container>
	)
}

export default HomePage
