import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import BeatLoader from 'react-spinners/BeatLoader'

const ImageGrid = ({ query }) => {
	if (query.isError) {
		// show error
		return (
			<Alert variant='warning'>
				<strong>Error!</strong> {query.error.message}
			</Alert>
		)
	}

	if (query.isLoading) {
		// show spinner
		return <BeatLoader color={'#888'} />
	}

	return (
		<Row xs={1} sm={2} md={3} lg={4}>
			{query.data && query.data.map(image => (
				<Col key={image.id} className="d-flex mb-4">
					<Image src={image.url} fluid />
				</Col>
			))}
		</Row>
	)
}

export default ImageGrid
