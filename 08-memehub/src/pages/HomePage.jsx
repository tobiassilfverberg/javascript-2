import Container from 'react-bootstrap/Container'
import UploadMeme from '../components/UploadMeme'

const HomePage = () => {
	return (
		<Container className="py-3">
			<h1 className="display-1">😂</h1>

			<UploadMeme />

			<hr className='my-4' />

			<p className="display-2">Show me dem memes!</p>
		</Container>
	)
}

export default HomePage
